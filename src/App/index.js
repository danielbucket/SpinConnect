import * as React from 'react'
import { Route, Routes, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react'

import Dashboard from './pages/Dashboard'
import AppManagement from './pages/AppMgmt'
import LandingPage from './pages/LandingPage'
import LoginPortal from './pages/LoginPortal'
import AlbumControl from './pages/AlbumControl'

export default function App() {
	const [loginStatus, setLoginStatus] = useState(false)
	const [userPackage, setUserPackage] = useState({})
	const [mediaSources, setMediaSources] = useState({})

	return (
		<div style={{
			"display": "flex",
			"flexDirection": "column",
			"JustifyContent": "center",
			"height": "100vh",
			"backgroundColor": "orange",
		}}>

			<Dashboard
				loginStatus={loginStatus}
				setLoginStatus={setLoginStatus}
				userPackage={userPackage}
				setUserPackage={setUserPackage}
				mediaSources={mediaSources}
				setMediaSources={setMediaSources} />


			<Routes>
				<Route path='/' element={ <LandingPage /> } />
				<Route path='/app_mgmt/*' element={<AppManagement mediaSources={mediaSources} />} />
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