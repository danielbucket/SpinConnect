import * as React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import style from './root.style.css'
import App from './App'

const domNode = document.getElementById('spinConnectRoot')
const rootNode = createRoot(domNode)

rootNode.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
)