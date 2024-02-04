import React from 'react'
import style from './index.module.css'
import discogsIcon from '../../../assets/icons/discogs-logo.png'
import podbeanIcon from '../../../assets/icons/podbean-logo-black.png'

export default function LandingPage() {

	return (
		<div className={style.landingPageWrapper}>
			<div className={style.welcome}>
				<p>Welcome to SpinConnect!</p>
				<p>Built around Discogs' developer API</p>
				<p>Connect your vinyl collection to streaming media</p>
			</div>
			<div className={style.mediaServicesContainer}>
				<p>Currently using these streaming media services</p>
				<div className={style.iconContainer}>
					<img src={discogsIcon} alt="discogs icon" />
					<img src={podbeanIcon} alt="podbean icon" />
				</div>
			</div>
		</div>
	)
}