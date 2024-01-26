import * as React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react'

import Header from './components/Header'
import AppManagement from './components/AppMgmt'
import { loginRoute } from '../utils/constants'

export default function App() {
	const [loginStatus, setLoginStatus] = useState(false)
	const [userPackage, setUserPackage] = useState({})

	return (
		<div style={{
			"display": "grid",
			"gridTemplateRows": "[Header] 10rem [AppMgmt]	calc(100vh - 10rem)"
		}}>
			<Header
				logOutPackage={{setLoginStatus, setUserPackage}}
				loginStatus={loginStatus}
				loginPackage={{userPackage, setUserPackage, loginRoute}} />
			<AppManagement userPackage={userPackage} />
		</div>
	)
}