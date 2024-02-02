import * as React from 'react'
import { useState } from 'react'
import style from './style.module.css'

import { CollectionLayout } from '../CollectionLayout'
import { fetchCollection } from './appMgmtHelpers'

export default function AppMgmt({ mediaSources }) {
	const [mediaSourceData, setMediaSourceData] = useState({})
	const [collection, setCollection] = useState({})

	const handleClick = (src, name) => {
		fetchCollection(src, name)
		.then(data => {
			setCollection((state) => Object.assign({}, state, { [name]:data }))
		})
		.catch(err => {
			throw new Error(err)
		})
	}

	const sourcesButtons = Object.keys(mediaSources).map((i,val) => {
		const { name, url } = mediaSources[i]

		return (
			<input
				key={val}
				type='button'
				value={name}
				className={style.spinUpBtn}
				onClick={() => handleClick(mediaSources[i].login, name)}
			/>
		)
	})

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
								{sourcesButtons}
							</div>
							<div className={style.inactiveOptions}>
								<p>Search options</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={style.collectionsLayout}>
				<CollectionLayout collection={collection} />
			</div>
		</div>
	)
}