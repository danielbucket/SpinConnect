import React, { useEffect } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import style from './style/dashboard.module.css'
import IsLoggedIn from './isLoggedIn'

export default function Dashboard(props) {
	const {
		loginStatus,
		setLoginStatus,
		userPackage,
		setUserPackage,
		mediaSources = {},
		setMediaSources } = props
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
					{
						srcsElems.length >= 1 ? (
						<>
							<p className={style.sourcesAvailable}>Available Media Sources: </p>
							<div className={style.mediaSources}>{srcsElems}</div>
						</>
						) : <></>
					}
				</div>
			</div>

			<nav className={style.loginStatusContainer}>
					{
						!loginStatus
							? (<Link to={'/login'} >Log In</Link>)
							: (<IsLoggedIn
									spinConUserName={spinConUserName}
									setLoginStatus={setLoginStatus}
									setUserPackage={setUserPackage}
									setMediaSources={setMediaSources} />)
					}
			</nav>
		</div>
	)
}