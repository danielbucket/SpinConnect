const discogsLoginPackage = {
		USER_NAME: process.env.DISCOGS_USER,
		USER_TOKEN: process.env.DISCOGS_TOKEN,
	}

const spinConnectUserName = 'bucketLimited'
const spinnConnectUserPassword = 'password123'

const loginUser = (req,res) => {
	const tokenHeaderKey = 'jwt-token'
	const authToken = res.headers[tokenHeaderKey]
	// try {
	// 	const verified = jwt.verify(authToken, jwtSecretKey)
	// 	if (verified) {
	// 		return res.status(200).json({
	// 			status: "logged in", message: "success"
	// 		})
	// 	} else {
	// 		return res.status(401).json({
	// 			status: "invalid auth", message: "error"
	// 		})
	// 	} catch (error) {
	// 		return res.status(401).json({
	// 			status: "invalid auth", message: "error"
	// 		})
	// 	}
	// }
}

const AuthUser_POST = (req,res) => {
	// const { email, password } req.body
	// serach for user in database...
	// const user = db.get('users')
	if (user.length ===1) {
		bcrypt.compare(password, user[0].password, function(_err, result) {
			if (!result) {
				return res.status(401).json({
					message: "Invalid password"
				})
			} else {
				let loginData = {
					email,
					signInTime: Date.now(),
				}

				const token = jwt.sign(loginData, jwtSecretKey)
				res.status(200).json({
					message: "success", token 
				})
			}
		})
	// If no user is found, hash the given password and create a new entry in the auth db with the email and hashed password
	} else if (user.length === 0) {
		bcrypt.hash(password, 10, function(_err, hash) {
			console.log({email, password: hash})
			// db.get('users')...

			let loginData = {
				email,
				signInTime: Date.now()
			}

			const token = jwt.sign(loginData, jwtSecretKey)
			res.status(200).json({
				message: "success", token
			})
		})
	}
}


const basicResponse = (req,res,next) => {
	console.log("Basic Response")
}

module.exports = {
	basicResponse,
}