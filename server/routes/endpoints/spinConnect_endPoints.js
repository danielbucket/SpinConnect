const discogsLogin = {
	discogsUser: 'BucketLimited',
	discogsToken: 'wcHcskCOmfrzBDupUZTrzPdlriIIqyewJGeaFxGB',
}

const spinConUser = {
	spinConUserName: 'BoneShart',
	firstName: 'HardShaft',
	lastName: 'BoneSlammer',
}


const userLogin = (req,res,next) => {
	const mediaSources = ['discogs']
	const dbQuery = Object.assign(
		{},
		{ discogsLogin },
		{ spinConUser },
		{ mediaSources }	,
		{ loggedIn:true }
	)

	res.status(201).send(dbQuery)

	next()
}




const AuthUser_POST = (req,res) => {
	// const { email, password } req.body
	// search for user in database...
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

module.exports = {
	userLogin,
}