import * as React from 'react'
import { Link } from 'react-router-dom'
import style from './style.module.css'
import { IsLoggedIn } from './headerHelpers'

export default function Header(props) {
	const { loginStatus, loginPackage, logOutPackage } = props
	const { userName } = loginPackage


	return (
		<div className={style.spinConnectHeaderContainer}>
			<div className={style.spinConnectHeaderTitle}>1-800-SpinConnect</div>
				<div className={style.loginStatusContainer}>
					{
						!loginStatus
							? (<Link to={'/login'}></Link>)
							: <IsLoggedIn userName={userName} logOutPackage={logOutPackage} />
					}
				</div>
		</div>
	)
}