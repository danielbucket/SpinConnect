import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation, useParams } from 'react-router-dom'
import style from './index.module.css'

export function AlbumControl() {
	const [discogsAlbumData, setDiscogsAlbumData] = useState({})

	const params = useParams()
	const location = useLocation()
	const navigate = useNavigate()

	useEffect(() => {
		setDiscogsAlbumData(() => location.state)
	}, [location])

	const buildDiscogsAlbum = () => {
		if (!discogsAlbumData.length) {
			return
		}

		const { cover_image } = discogsAlbumData

		console.log('cover image: ', cover_image)


		return (
			<div className={style.albumCardContainer}>
				<img src={cover_image} />
				<p>Poop</p>
			</div>
		)
	}

	const builtDiscogsAlbum = buildDiscogsAlbum()

	return (
		<div className={style.controlsWrapper}>

			<div className={style.discogsAlbumWrapper}>
				{ builtDiscogsAlbum }
			</div>

			<div
				className={style.backBtn}
				onClick={() => navigate(-1)} >
					Go back
				</div>

		</div>
	)
}