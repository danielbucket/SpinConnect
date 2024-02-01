import * as React from 'react'
import { useNavigate } from 'react-router-dom'

export function IsLoggedIn({ spinConUserName, setLoginStatus, setUserPackage }) {
	const navigate = useNavigate()

	const handleClick = () => {
		setLoginStatus(() => false)
		setUserPackage(() => {})
		
		navigate('/')
	}

	return (
		<div className='is-logged-in-container'>
			<p className='active-user-name'>{spinConUserName}</p>
			<p>You are currently logged in.</p>
			<div onClick={handleClick}>Log out?</div>
		</div>
	)
}