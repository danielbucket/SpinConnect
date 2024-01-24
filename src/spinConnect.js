import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import style from './root.style.css'

import App from './pages/App'
import LoginPortal from './pages/LoginPortal'
import ErrorPage from './pages/error-page.js'


const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <ErrorPage />,
	},
	{
		path: '/login',
		element: <LoginPortal />,
	},
])

const domNode = document.getElementById('spinConnectRoot')
const rootNode = createRoot(domNode)

rootNode.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
)