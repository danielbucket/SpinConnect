import * as React from 'react'
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react'

import Dashboard from './pages/Dashboard'
import AppManagement from './pages/AppMgmt'
import LandingPage from './pages/LandingPage'
import LoginPortal from './pages/LoginPortal'

const discogsUser = {
	USER_NAME: process.env.DISCOGS_USER,
	USER_TOKEN: process.env.DISCOGS_TOKEN,
	KEY: process.env.DISCOGS_CONSUMER_KEY,
	SECRET: process.env.CONSUMER_SECRET,
	loggedIn: true,
}


export default function App() {
	const [loginStatus, setLoginStatus] = useState(false)
	const [userPackage, setUserPackage] = useState(discogsUser)

	return (
		<div style={{
			"display": "grid",
			"gridTemplateRows": "[Dashboard] 10rem [AppMgmt]	calc(100vh - 10rem)"
		}}>
			<Dashboard loginStatus={loginStatus} userPackage={userPackage} />

			<Routes>
				<Route path='/' element={ <LandingPage /> }/>
				<Route path='/management' element={<AppManagement /> }/>
				<Route path='/login' element={ <LoginPortal setLoginStatus={setLoginStatus}/> }/>
			</Routes>
		</div>
	)
}