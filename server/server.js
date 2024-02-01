const express = require('express')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const PORT = process.env.PORT || 4545

const bcrypt = require("bcrypt")
const cors = require('cors')
const jwt = require("jsonwebtoken")

const app = express()
const webpackConfig = require('../webpack.config.js')
const { publicPath } = webpackConfig.output
const compiler = webpack(webpackConfig)
const appRouter = require('./router')

app.use(
	webpackDevMiddleware(compiler, {
		publicPath,
		index: 'spinConnectApp.html',
	})
)

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', appRouter)

app.listen(PORT, () => {
	console.log(`SpinConnect Server is spinning on port: ${PORT}.`)
})