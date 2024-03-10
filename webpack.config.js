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
        filename: "./assets/js/[name].js",
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
            {
                test: /\.html$/,
                use: "html-loader",
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
                    // Copy non-ts, non-tsx files
                    from: "./src",
                    to: "../",
                    filter: (resourcePath) => {
                        return !resourcePath.match(/\.(tsx|ts)?$/);
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
