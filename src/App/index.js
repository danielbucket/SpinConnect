import * as React from 'react'
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react'

import Dashboard from './pages/Dashboard'
import AppManagement from './pages/AppMgmt'
import LandingPage from './pages/LandingPage'
import LoginPortal from './pages/LoginPortal'

export default function App() {
	const [loginStatus, setLoginStatus] = useState(false)
	const [userPackage, setUserPackage] = useState({})
	const [mediaSources, setMediaSources] = useState({})

	return (
		<div style={{
			"display": "grid",
			"gridTemplateRows": "[Dashboard] 10rem [AppMgmt]	calc(100vh - 10rem)"
		}}>
			<Dashboard
				loginStatus={loginStatus}
				setLoginStatus={setLoginStatus}
				userPackage={userPackage}
				setUserPackage={setUserPackage}
				mediaSources={mediaSources} />

			<Routes>
				<Route path='/' element={ <LandingPage /> }/>
				<Route path='/management' element={ <AppManagement /> }/>
				<Route path='/login' element={
					<LoginPortal
						setLoginStatus={setLoginStatus}
						setUserPackage={setUserPackage}
						setMediaSources={setMediaSources} />
			}/>
			</Routes>
		</div>
	)
}