import * as React from 'react'
import { useState } from 'react'
import style from './style.module.css'

import Collection from '../Collection'
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






				<div className={style.appMgmt}>

					<div className={style.mgmtPreview}>
						<p>Management</p>
						<div className={style.mgmtOptionsContainer}>
							<div className={style.activeOptions}>
								<p>Some other active options</p>
							</div>
							<div className={style.inactiveOptions}>
								<p>List of available media sources to pull data from</p>
							</div>
						</div>
					</div>
				</div>



				<div className={style.mgmtControls}>

					<div className={style.mgmtPreview}>
						<p>Controls</p>
						<div className={style.mgmtOptionsContainer}>
							<div className={style.activeOptions}>
								<button className={style.spinUpBtn}>Spin Up Collection</button>
							</div>
							<div className={style.inactiveOptions}>
								<p>Search options</p>
							</div>
						</div>
					</div>

				</div>
			</div>





			<div className={style.collectionContainer}>
				<Collection
					userPackage={userPackage}
					media={mediaSourceData} />	
			</div>
		</div>
	)
}