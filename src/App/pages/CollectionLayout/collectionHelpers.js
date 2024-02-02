import * as React from 'react'
import style from './styles/card.module.css'

export const spinCard = card => {
	const { id, cover_image, title, year, } = card
	const { name } = card.artists[0]

	const openCard = () => {
		console.log('open card')
	}

	return (
		<div
			key={card.id}
			className={style.container}
			onClick={(i) => openCard(i)} >
			<img
				src={card.cover_image}
				alt='card image' />
			<div className={style.info}>
				<div className={style.name}>{name}</div>
				<div className={style.title}>{title}</div>
				<div className={style.year}>{year}</div>
			</div>
		</div>
	)
}