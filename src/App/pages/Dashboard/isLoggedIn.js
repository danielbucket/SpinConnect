import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import style from './style/isLoggedIn.module.css'

export default function IsLoggedIn({ spinConUserName, setLoginStatus, setUserPackage, setMediaSources }) {
	const navigate = useNavigate()

	const handleClick = () => {
		setLoginStatus(() => false)
		setUserPackage(() => {})
		setMediaSources(() => {})
		navigate('/')
	}

	return (
		<div className={style.container}>

			<p className={style.userName}>Welcome, <span>{spinConUserName}</span></p>
			<input
				className={style.inputButton} 
				type='button' 
				onClick={handleClick}
				value={'Log Out'} />
		</div>
	)
}