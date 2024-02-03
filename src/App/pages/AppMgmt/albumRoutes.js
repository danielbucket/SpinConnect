import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { CollectionLayout } from '../CollectionLayout'
import { AlbumControl } from '../AlbumControl'


export function AlbumRoutes({vinylCollection}) {
	return(	
		<Routes>
			<Route index element={<CollectionLayout vinylCollection={vinylCollection}/>} />
			<Route path=':id' element={<AlbumControl />} />
		</Routes>
	)
}