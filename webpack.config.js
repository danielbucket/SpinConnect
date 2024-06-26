const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const Dotenv = require('dotenv-webpack')
const devMode = process.env.NODE_ENV !== "production"
const mode = devMode ? 'development' : 'production'

const paths = {
	DIST: path.resolve(__dirname, 'dist'),
	SRC: path.resolve(__dirname, 'src'),
	TEMPLATES: path.resolve(__dirname, 'src/templates'),
	PUBLIC_PATH: process.env.PUBLIC_PATH || '/',
}

module.exports = {
	mode: mode,
	devtool: devMode ? 'inline-source-map' : '',
	entry: {
		spinConnectApp: './src/spinConnect.js',
		shared: ['react', 'react-dom'],
	},
	output: {
		filename: '[name].contenthash.js',
		path: paths.DIST,
		publicPath: paths.PUBLIC_PATH,
		clean: true,
	},

	plugins: [
		new HtmlWebpackPlugin({
			title: 'Spin Connect',
			description: 'Unify your vinyl connection with other media streaming apps',
			filename: 'spinConnectApp.html',
			template: path.join(paths.TEMPLATES, '/app_template.hbs'),
		}),
		new Dotenv(),
	].concat(devMode ? [] : [
		new MiniCssExtractPlugin({ filename: 'spinConnect.style.css' })
	]),
	module: {
		rules: [
	    {
	      test: /\.css$/,
	      use: [
	      	devMode
	      		? 'style-loader', "css-loader"
	      		: MiniCssExtractPlugin.loader, "css-loader"
      	],
	      exclude: /node_moudles/,
	    },
			{
				test: /\.(jsx|js)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [ '@babel/env' ],
						plugins: [ '@babel/plugin-proposal-class-properties' ],
					},
				},
			},
			{
				test: /\.hbs$/,
				exclude: /node_modules/,
				use: ['handlebars-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				exclude: /node_modules/,
				type: 'asset/resource',
			},
			{
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        exclude: /node_modules/,
        type: 'asset/resource',
      },
		],
	},
}