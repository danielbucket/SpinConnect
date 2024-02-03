import * as React from 'react'
import { useState } from 'react'
import { Route, Routes, useNavigate, Outlet } from 'react-router-dom';
import style from './styles/index.module.css'

import { CollectionLayout } from '../CollectionLayout'
import { fetchCollection } from './fetchFuncs'
import { AlbumControl } from '../AlbumControl'
import { ManagementTools } from './managementTools'

export default function AppMgmt({ mediaSources }) {
	const [mediaSourceData, setMediaSourceData] = useState({})
	const [vinylCollection, setVinylCollection] = useState({})
	const navigate = useNavigate()

	const handleClick = (src, name) => {
		fetchCollection(src, name)
		.then(data => {
			setVinylCollection((state) => Object.assign({}, state, { [name]:data }))
		})
		.catch(err => {
			throw new Error(err)
		})
		navigate('/app_mgmt/collection')
	}

	const srcBtns = Object.keys(mediaSources).map((i,val) => {
		const { name, url } = mediaSources[i]
		// const { login } = mediaSources[i]

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
			<ManagementTools srcBtns={srcBtns} />

			<Routes>
				<Route path='collection' element={<CollectionLayout vinylCollection={vinylCollection} />} />
				<Route path=':id' element={<AlbumControl />} />
			</Routes>

		</div>
	)
}