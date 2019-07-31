const path = require("path");

const bundleLocation = path.join(__dirname, "public");

module.exports = {
    mode: "development",
    entry: "./src/app.js",
    output: {
        path: bundleLocation,
        filename: "bundle.js"
    },
    module: {
        rules: [{
            loader: "babel-loader",
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]

    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: bundleLocation
    }
}