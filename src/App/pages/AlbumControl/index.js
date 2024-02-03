import React from 'react'
import { useNavigate } from 'react-router-dom'
import style from './index.module.css'
import { useParams } from 'react-router-dom'

export function AlbumControl() {
	const params = useParams()
	console.log('params: ', params)
	const navigate = useNavigate()

	return (
		<div className={style.parentContainer}>
			<p>AlbumControls, bitch.</p>
			<div
				className={style.backBtn}
				onClick={() => navigate(-1)}	>
				Go back
			</div>
		</div>
	)
}