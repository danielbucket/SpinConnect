import * as React from 'react'
import { Link } from 'react-router-dom'
import style from './index.style.css'
import { IsLoggedIn } from './headerHelpers'

export default function Header(props) {
	const { loginStatus, loginPackage, logOutPackage } = props
	const { userName } = loginPackage

	return (
		<div className='spinConnect-header-container'>
			<div className='spinConnect-header-title'>1-800-SpinConnect</div>
				<div className='login-status-container'>
					{
						!loginStatus
							? (<Link to={'/login'}></Link>)
							: <IsLoggedIn userName={userName} logOutPackage={logOutPackage} />
					}
				</div>
		</div>
	)
}