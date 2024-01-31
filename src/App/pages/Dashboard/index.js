import * as React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import style from './style.module.css'
import { IsLoggedIn } from './headerHelpers'



export default function Dashboard({ loginStatus,userPackage }) {
	const { USER_NAME } = userPackage

	return (
		<div className={style.headerContainer}>
			<div className={style.headerTitle}>SpinConnect</div>
			<nav className={style.loginStatusContainer}>
					{
						!loginStatus
							? (<Link to={'/login'} replace>Log In</Link>)
							: (<IsLoggedIn userName={USER_NAME}/>)
					}
			</nav>
		</div>
	)
}