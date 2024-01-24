import * as React from 'react'
import { useState } from 'react'
import style from './style.module.css'

import { fetchCollection } from './appMgmtHelpers'

export default function AppMgmt(props) {
	const [mediaSourceData, setMediaSourceData] = useState({})
	const { userPackage } = props

	const handleClick = mediaSource => {
		const { sourceApi } = mediaSource

		fetchCollection(sourceApi)
		.then(data => {
			const newState = Object.assign({}, mediaSourceData, data)
			setMediaSourceData(newState)
		})
	}

	const mediaSourceBtns = (sources) => {
		return (
			<button
				className='fetch-collection-btn'
				onClick={(i) => handleClick(i)}>
				Spin up {i.mediaName}
			</button>
		)
	}

	return (
		<div className={style.appMgmtContainer}>
		
			<div className={style.mgmtOperationsContainer}>
				<h1>App Management</h1>
				<div className={style.mgmtControls}>Controls</div>
			</div>

			<div className={style.resultsContainer}>
				Results Container
			</div>	

		</div>
	)
}