import React from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import style from './style/dashboard.module.css'
import { IsLoggedIn } from './dashboardHelpers'

export default function Dashboard({ loginStatus, setLoginStatus, userPackage, setUserPackage, mediaSources }) {
	const { spinConUserName } = userPackage || ''

	const srcsElems = Object.keys(mediaSources).map((i,val) => {
		return (
			<a
				key={val}
				href={mediaSources[i].url}
				target='_blank'
				className={style.sourceCard} >
				{mediaSources[i].name}
			</a>
		)
	})

	return (
		<div className={style.dashboardContainer}>
			<div className={style.statusContainer}>
				<div className={style.headerTitle}>SpinConnect</div>
				<div className={style.sourcesContainer}>
					<p className={style.sourcesAvailable}>Available Media Sources: </p>
					<div className={style.mediaSources}>{srcsElems}</div>
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