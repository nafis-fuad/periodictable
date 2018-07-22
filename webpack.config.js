// need to use require, or else throws errors
const path = require("path");
const dotenv = require("dotenv");

dotenv.config({ path: ".env" });

module.exports = {
    entry: './src/public/js/index.ts',
    devtool: 'inline-source-map',
    watch: true,
    mode: process.env.MODE,
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist/public/js')
    }
};