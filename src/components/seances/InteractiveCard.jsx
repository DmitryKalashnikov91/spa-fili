'use client'
import parse from 'html-react-parser'
import Image from 'next/image'
import { useState } from 'react'
import styles from './Seances.module.scss'

export const InteractiveCard = ({ initialData }) => {
	const [cardData, setCardData] = useState(initialData)
	const [isSelected, setIsSelected] = useState(false)
	const handleClick = () => {
		setCardData({
			...cardData,
			title: initialData.title,
			description: initialData.description,
		})
		setIsSelected(!isSelected)
	}
	return (
		<div
			className={`${styles.Seances_card} ${
				isSelected ? styles.Seances_card__selected : ''
			}`}
		>
			<Image src={cardData.imgUrl} alt={cardData.title} onClick={handleClick} />
			<h2>{cardData.title}</h2>
			{isSelected && <div>{parse(cardData.description)}</div>}
		</div>
	)
}
