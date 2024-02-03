import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import style from './style.module.css'

export default function LoginPortal({ setLoginStatus, setUserPackage, setMediaSources }) {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [emailError, setEmailError] = useState('')
	const [passwordError, setPasswordError] = useState('')
	const navigate = useNavigate()

	const fetchUserData = () => {
			return fetch('api/v1/user/login_user')
			.then(res => res.json())
			.then(data => {
				if (!data) {
					throw new Error()
					return
				} else {
					const { mediaSources, spinConUser, loggedIn } = data

					setMediaSources((val) => data.mediaSources)
					setUserPackage((val) => data.spinConUser)
					setLoginStatus((val) => data.loggedIn)
				}
			})
			.catch(err => new Error(err))
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

		fetchUserData()
		navigate('/app_mgmt')
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




