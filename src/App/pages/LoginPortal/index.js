import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import style from './style.module.css'
const loginUserURL = process.env.SPNCON_USERLOGIN

export default function LoginPortal({ setLoginStatus, setUserPackage }) {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [emailError, setEmailError] = useState('')
	const [passwordError, setPasswordError] = useState('')
	const navigate = useNavigate()

	const fetchUserData = () => {
		const discogsUser = {
			discogs: {
				USER_NAME: process.env.DISCOGS_USER,
				USER_TOKEN: process.env.DISCOGS_TOKEN,
			}
		}

		//on succuessful validation of user login
		return Object.assign({}, discogsUser, { loggedIn:true } )
	}

	const onButtonClick = () => {
		setEmailError('')
		setPasswordError('')

		// if ("" === email) {
		// 	setEmailError("Please enter your email")
		// 	return
		// }

		// if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
		// 	setEmailError("Please enter a valid email")
		// 	return
		// }

		// if (password.length < 7) {
		// 	setPasswordError("The password must be 8 characters or longer")
		// 	return
		// }

		// fetch(loginUserURL, {
		// 	"method": "POST",
			
		// })

		const data = fetchUserData()
		console.log(data)

		setLoginStatus(() => data.loggedIn)
		setUserPackage(() => data.discogs)
		
		navigate('/management')
	}



	return (
		<div className={style.loginContainer}>
			<div className={style.titleContainer}>
				<p>SpinConnect</p>
				<p>Login</p>
			</div>
			<div className={style.inputContainer}>
				<div className={style.inputWrapper}>
					<input
						value={email}
						placeholder="Enter your email here"
						onChange={(ev) => setEmail(ev.target.value)}
						className={style.inputBox} />
					<label className={style.errorLabel}>{emailError}</label>
				</div>
				<div className={style.inputWrapper}>
					<input 
						value={password}
						placeholder="Enter your password here"
						onChange={(ev) => setPassword(ev.target.value)}
						className={style.inputBox} />
					<label className={style.errorLabel}>{passwordError}</label>
				</div>
				<input
					className={style.inputButton}
					type='button'
					onClick={onButtonClick}
					value={'Log In'} />
			</div>
		</div>
	)
}




