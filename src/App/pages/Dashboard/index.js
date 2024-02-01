import * as React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import style from './style/dashboard.module.css'
import { IsLoggedIn } from './dashboardHelpers'

export default function Dashboard({ loginStatus, setLoginStatus, userPackage, setUserPackage, mediaSources }) {
	const { spinConUserName } = userPackage || ''

	const srcsElems = mediaSources.map(i => {
		console.log(i)
		return 
	})

	return (
		<div className={style.dashboardContainer}>
			<div className={style.statusContainer}>
				<div className={style.headerTitle}>SpinConnect</div>
				<div className={style.sourcesContainer}>
					<div className={style.sourcesAvailable}>Available Media Sources: </div>
					<div className={style.mediaSources}>{
						mediaSources.map(i => <div>{i}</div>)
					}</div>
				</div>
			</div>

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