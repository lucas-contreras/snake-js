const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
	mode: "development",
	devtool: "inline-source-map",
	entry: {
		main: path.resolve(__dirname, "./src/index.js"),
	},
	output: {
		path: path.resolve(__dirname, "./dist"),
		filename: "[name].bundle.js",
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: ["babel-loader"],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "test",
			template: path.resolve(__dirname, "./src/template.html"),
			filename: "index.html",
		}),
		new CleanWebpackPlugin(),
	],
	devServer: {
		historyApiFallback: true,
		compress: true,
		port: 3000,
		open: true,
		hot: true,
	},
};
