import * as React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import style from './style.module.css'
import { IsLoggedIn } from './dashboardHelpers'

export default function Dashboard({ loginStatus, setLoginStatus, userPackage, setUserPackage }) {
	const { spinConUserName } = userPackage || ''

	return (
		<div className={style.headerContainer}>
			<div className={style.headerTitle}>SpinConnect</div>
			<nav className={style.loginStatusContainer}>
					{
						!loginStatus
							? (<Link to={'/login'} >Log In</Link>)
							: (<IsLoggedIn
									spinConUserName={spinConUserName}
									setLoginStatus={setLoginStatus}
									setUserPackage={setUserPackage} />)
					}
			</nav>
		</div>
	)
}