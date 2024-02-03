import * as React from 'react'
import { useNavigate, Link } from 'react-router-dom'
import style from './styles/card.module.css'

export const albumCard = card => {
	const navigate = useNavigate()
	const { id, cover_image, title, year, } = card
	const { name } = card.artists[0]

	const openCard = (id) => {
		navigate(`/app_mgmt/collection:${id}`)
	}

	return (

			<div
				key={id}
				className={style.container}
				onClick={() => openCard(id)} >
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