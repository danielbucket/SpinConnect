import * as React from 'react'
import style from './style.module.css'

export const spinCard = card => {
	const { id, cover_image, title, year, } = card
	const { name } = card.artists[0]

	const openCard = () => {
		console.log('open card')
	}

	return (
		<div
			key={card.id}
			className={style.spinCardContainer}
			onClick={(i) => openCard(i)}
			>
			<img
				className={style.spinCardAlbumImg}
				src={card.cover_image}
				alt='card image' />
			<div className={style.spinCardInfo}>
				<div className={style.spinCardAlbumName}>{name}</div>
				<div className={style.spinCardAlbumTitle}>{title}</div>
				<div className={style.spinCardYear}>{year}</div>
			</div>
		</div>
	)
}