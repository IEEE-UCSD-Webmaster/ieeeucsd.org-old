/**
 * Webpack Configuration File
 */
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const fs = require("fs");

module.exports = {
    entry: loadEntries("./src/public"),
    output: {
        path: path.resolve(__dirname, "build/public"),
        filename: "./js/[name].js",
    },
    mode: "production",
    module: {
        rules: [
            {
                test: /\.(tsx|ts)$/,
                use: "ts-loader",
            },
            {
                test: /\.(js)$/,
                use: "babel-loader",
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    // Copy utility files
                    from: "./src/util",
                    to: "../util",
                    globOptions: {
                        ignore: ["**/*.ts", "**/*.tsx"],
                    },
                },
                {
                    // Copy public files
                    from: "./src/public",
                    to: "./",
                    globOptions: {
                        ignore: ["**/*.ts", "**/*.tsx"],
                    },
                },
            ],
        }),
    ],
};

/**
 * Load all entries from a directory
 * @param {*} dir Directory to load entries from
 * @returns Object with entries
 */
function loadEntries(dir) {
    const files = fs.readdirSync(path.join(__dirname, dir));
    let entries = {};
    files.forEach((file) => {
        let name = file.match(/^(.*)\.tsx$/);
        if (name) {
            entries[name[1]] = path.join(__dirname, dir, file);
        }
    });
    return entries;
}
