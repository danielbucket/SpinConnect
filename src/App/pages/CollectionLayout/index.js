import * as React from 'react'
import { useState } from 'react'
import style from './styles/index.module.css'
import { albumCard } from './collectionHelpers'
import { v4 as uuidv4 } from 'uuid'

export function CollectionLayout({ vinylCollection }) {
	const collectionCards = Object.keys(vinylCollection).map((i,val) => (
			<div
				key={uuidv4()}
				className={style.cardsWrapper} >
				<p>{i}</p>
				<div className={style.cardsContainer}>
					{ vinylCollection[i].map(i => albumCard(i)) }
				</div>
			</div>
		)
	)

	return (
		<div className={style.collectionLayoutWrapper} >
			{collectionCards}
		</div>
	)
}