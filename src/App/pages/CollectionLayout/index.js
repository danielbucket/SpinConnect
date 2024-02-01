import * as React from 'react'
import { useState } from 'react'
import style from './style.module.css'
import { getDiscogs } from '../../utils/discogsHelpers'
import { spinCard } from './collectionHelpers'

export default function CollectionLayout(props) {
	const { userPackage, media } = props

	return (
		<>
		</>
	)
}

			// <div className={style.spinCardContainer}></div>
				// 	discogsCollection.length > 0
				// 		? discogsCollection.map(i => spinCard(i))
				// 		: <div className={style.noDataFound}>'No data from Discogs.</div>
				// }