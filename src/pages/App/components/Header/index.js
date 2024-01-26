import * as React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import style from './style.module.css'
import { IsLoggedIn } from './headerHelpers'
import { Login } from '../../../LoginPortal'

const discogsUser = {
	USER_NAME: process.env.DISCOGS_USER,
	USER_TOKEN: process.env.DISCOGS_TOKEN,
	KEY: process.env.DISCOGS_CONSUMER_KEY,
	SECRET: process.env.CONSUMER_SECRET,
	loggedIn: true,
}


export default function Header({loginStatus, loginPackage}) {
	const { userName } = loginPackage


	return (
		<div className={style.headerContainer}>
			<div className={style.headerTitle}>SpinConnect</div>

			<nav className={style.loginStatusContainer}>

					{
						!loginStatus
							? (<Link to={'/login'}>Log In</Link>)
							: (<IsLoggedIn userName={userName} />)
					}

			</nav>

		</div>
	)
}