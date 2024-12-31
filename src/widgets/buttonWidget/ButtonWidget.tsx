import React from 'react'
import styles from './style.module.scss'
import { Link } from 'react-router-dom'

export default function Button() {
	return (
		<Link to='/products'>
			<button className={styles.btn}>Shop now</button>
		</Link>
	)
}