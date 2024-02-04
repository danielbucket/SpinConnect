import React from 'react'
import style from './styles/managementTools.module.css'

export function ManagementTools({ srcBtns }) {
	return (
		<div className={style.mgmtToolsWrapper}>
			<div className={style.appMgmt}>
				<div className={style.mgmtPreview}>
					<p>Management</p>
					<div className={style.mgmtOptionsContainer}>
						<div className={style.activeOptions}>
							<p>Some other active options</p>
						</div>
						<div className={style.inactiveOptions}>
							<p>List of available media sources to pull data from</p>
						</div>
					</div>
				</div>
			</div>
			<div className={style.mgmtControls}>
				<div className={style.mgmtPreview}>
					<p>Controls</p>
					<div className={style.mgmtOptionsContainer}>
						<div className={style.activeOptions}>
							{srcBtns}
						</div>
						<div className={style.inactiveOptions}>
							<p>Search options</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}