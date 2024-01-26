import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import style from './style.module.css'
const loginUserURL = process.env.SPNCON_USERLOGIN

export default function Login(props) {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [emailError, setEmailError] = useState('')
	const [passwordError, setPasswordError] = useState('')

	const navigate = useNavigate()

	const onButtonClick = () => {
		setEmailError('')
		setPasswordError('')

		if ("" === email) {
			setEmailError("Please enter your email")
			return
		}

		if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
			setEmailError("Please enter a valid email")
			return
		}

		if (password.length < 7) {
			setPasswordError("The password must be 8 characters or longer")
			return
		}

		// fetch(loginUserURL, {
		// 	"method": "POST",
			
		// })
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




