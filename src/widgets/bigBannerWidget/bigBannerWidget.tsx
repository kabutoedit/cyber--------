import React from 'react'
import styles from './style.module.scss'
import ButtonWidget from '../buttonWidget/ButtonWidget'

export default function bigBannerWidget() {
	return (
		<section className={styles.bigBannerWidget}>
			<div className={styles.content}>
				<h2 className={styles.bigBannerText}>
					Big Summer <h2 className={styles.big}>Sale</h2>
				</h2>
				<p className={styles.bigBannerTxt}>
					Commodo fames vitae vitae leo mauris in. Eu consequat.
				</p>
				<ButtonWidget />
			</div>
		</section>
	)
}