import {Schema, Document, LeanDocument} from "mongoose";
import * as mongoose from "mongoose";
import {promisify} from "util";
import {randomBytes, pbkdf2} from "crypto";

const pbkdf = promisify(pbkdf2);

const User = mongoose.model("User", new Schema({
	display: String,
	email: {
		public: Boolean,
		text: String,
	},
	picture: String,
	password: {
		hash: Buffer,
		salt: Buffer
	},
	bio: {type: String, default: ""},
	isOfficer: {type: Boolean, default: false},
	title: {type: String, default: "Member"},
	uuid: String
}));

export interface DBUser extends Document {
	display: string;
	email: string;
	picture: string;
	password: HashSalt
	isOfficer: boolean;
	title: string;
	uuid: string;
}
interface HashSalt {
	hash: Buffer;
	salt: Buffer;
}

export default class UserDatabase {

	// How many iterations pbkdf2 will iterate the password hashing algorithm
	private static PW_ITERATIONS = 100000;
	// The length of the salt that should be used with every password hash
	private static SALT_LENGTH = 64;
	// How many bytes will be used to generate a UUID of length 2 times this variable
	private static UUID_LENGTH = 32;

	/**
	 * Makes a new UserDatabase
	 * @param url the mongodb database url to connect to
	 */
	constructor(url: string) {
		mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
		mongoose.set("returnOriginal", false);
	}

	// Functions to edit current users
	/**
	 * Changes a user's display name on the website
	 * @param uuid the UUID of the user
	 * @param newName the user's new name
	 */
	public async setName(uuid: string, newName: string) {
		await User.findOneAndUpdate({uuid: uuid}, {name: newName}).exec();
	}
	/**
	 * Gets the display name of a user with a given UUID
	 * @param uuid the UUID of the user
	 * @returns the user's display name
	 */
	 public async getName(uuid: string): Promise<string> {
		return (await User.findOne({uuid: uuid}).lean().exec() as DBUser).display;
	}

	/**
	 * Updates a user's display email
	 * @param uuid the UUID of the user
	 * @param newEmail the user's new display email
	 */
	public async setEmail(uuid: string, newEmail: string) {
		await User.findOneAndUpdate({uuid: uuid}, {email: newEmail}).exec();
	}
	/**
	 * Gets the email of a user with a given UUID
	 * @param uuid the UUID of the user
	 * @returns the user's email
	 */
	public async getEmail(uuid: string): Promise<string> {
		return (await User.findOne({uuid: uuid}).lean().exec() as DBUser).email;
	}

	/**
	 * Updates a user's password
	 * @param uuid the UUID of the user
	 * @param newPassword the user's new password
	 */
	public async setPassword(uuid: string, newPassword: string) {
		let hashsalt = await UserDatabase.hash(newPassword);
		await User.findOneAndUpdate({uuid: uuid}, {password: hashsalt}).exec();
	}
	/**
	 * Gets the password of a user with a given UUID
	 * @param uuid the UUID of the user
	 * @returns the user's password
	 */
	public async getPasswordHash(uuid: string): Promise<Buffer> {
		return (await User.findOne({uuid: uuid}).lean().exec() as DBUser).password.hash;
	}

	/**
	 * Updates a member's position
	 * @param uuid the UUID of the user
	 * @param newTitle the user's new officer title/position
	 */
	public async setRank(uuid: string, newTitle: string, isOfficer: boolean) {
		await User.findOneAndUpdate({uuid: uuid}, {title: newTitle, isOfficer: isOfficer}).exec();
	}
	/**
	 * Gets the title of a user with a given UUID
	 * @param uuid the UUID of the user
	 * @returns the user's title
	 */
	public async getRank(uuid: string): Promise<string> {
		return (await User.findOne({uuid: uuid}).lean().exec() as DBUser).title;
	}
	/**
	 * Gets whether of a user with a given UUID is an officer
	 * @param uuid the UUID of the user
	 * @returns true if the user is an officer
	 */
	public async isOfficer(uuid: string): Promise<boolean> {
		return (await User.findOne({uuid: uuid}).lean().exec() as DBUser).isOfficer;
	}

	/**
	 * Sets the user's new profile picture
	 * @param uuid the UUID of the user
	 * @param newPic the link to the new URL of the profile picture
	 */
	public async setPicture(uuid: string, newPic: string) {
		await User.findOneAndUpdate({uuid: uuid}, {picture: newPic}).exec();
	}
	/**
	 * Gets the profile picture of a user with a given UUID
	 * @param uuid the UUID of the user
	 * @returns the user's profile picture
	 */
	public async getPicture(uuid: string): Promise<string> {
		return (await User.findOne({uuid: uuid}).lean().exec() as DBUser).picture;
	}

	public async getUser(uuid: string): Promise<DBUser> {
		return User.findOne({uuid: uuid}).exec() as Promise<DBUser>;
	}

	// User creation and deletion functions
	/**
	 * Deletes a user with the given UUID
	 * @param uuid the UUID of the user
	 */
	public async deleteUser(uuid: string) {
		await User.findOneAndDelete({uuid: uuid}).exec();
	}

	/**
	 * Makes a new user and adds it to the database
	 * @param display the user's display name
	 * @param email the user's display email
	 * @param picture the user's picture
	 * @param password the user's plaintext password
	 */
	public async makeNewUser(display: string, email: string, picture: string, password: string, title?: string, isOfficer?: boolean): Promise<void> {
		let encrypted = await UserDatabase.hash(password);
		await (new User({
			display: display,
			email: email,
			picture: picture,
			password: encrypted,
			uuid: UserDatabase.genUUID(),
			isOfficer: !!isOfficer,
			title: title ? title : "Member"
		})).save();
	}

	// Utility functions
	/**
	 * Hashes a password using a salt of 64 random bytes and pbkdf2 with 100000 iterations
	 * @param password the password as a string that should be hashed
	 * @returns the hashed password 
	 */
	public static async hash(password: string): Promise<HashSalt> {
		let salt = randomBytes(UserDatabase.SALT_LENGTH);
		let pass = Buffer.from(String.prototype.normalize(password));
		return {
			hash: await pbkdf(pass, salt, UserDatabase.PW_ITERATIONS, 512, "sha512"),
			salt: salt
		};
	}

	/**
	 * Generates a UUID for a user or anything else
	 * @returns a random hex string of length 2 * UUID_LENGTH
	 */
	public static genUUID(): string {
		return Array.from(randomBytes(UserDatabase.UUID_LENGTH))
			.map(val=>(val.toString(16).padStart(2,"0"))).join("");
	}
}