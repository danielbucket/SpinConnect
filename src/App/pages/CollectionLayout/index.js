import * as React from 'react'
import { useState } from 'react'
import style from './styles/index.module.css'
import { getDiscogs } from '../../utils/discogsHelpers'
import { spinCard } from './collectionHelpers'
import { v4 as uuidv4 } from 'uuid';

export function CollectionLayout({ collection }) {
	const srcsNameArr = []
	const cardCollections = Object.keys(collection).map((i,val) => {

		return (
			<div key={uuidv4()} className={style.container}>
				<p>{i}</p>
				<div className={style.cardsWrapper}>
					{ collection[i].map(i => spinCard(i)) }
				</div>
			</div>
		)
	})
console.log('cardCollections: ', cardCollections)

	return (
		<div className={style.wrapper}>
		{ cardCollections }
		</div>
	)
}