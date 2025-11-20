'use client'
import parse from 'html-react-parser'
import Image from 'next/image'
import { useState } from 'react'
import {
	MdOutlineKeyboardDoubleArrowDown,
	MdOutlineKeyboardDoubleArrowUp,
} from 'react-icons/md'
import styles from './Seances.module.scss'

export const InteractiveCard = ({ initialData }) => {
	const [cardData, setCardData] = useState(initialData)
	const [isSelected, setSelected] = useState(false)
	const [isShowOsteo, setShowOsteo] = useState(false)

	const handleShowOsteo = () => {
		setShowOsteo(!isShowOsteo)
	}
	const handleClick = () => {
		setCardData({
			...cardData,
			title: initialData.title,
			description: initialData.description,
		})
		setSelected(!isSelected)
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
			{cardData.osteo && isSelected ? (
				<div>
					<div>Рекомендации, диагностика 3500р.</div>{' '}
					<div>Устранение боли 6500р.</div>
					<div
						className='underline underline-offset-4'
						onClick={handleShowOsteo}
					>
						{isShowOsteo ? (
							<p>
								<MdOutlineKeyboardDoubleArrowUp />
							</p>
						) : (
							<p className='text-2xl text-orange-300'>
								<MdOutlineKeyboardDoubleArrowDown />
							</p>
						)}
					</div>
					{isShowOsteo && (
						<div>
							<ul>
								<li>Осмотр, рекомендации, диагностика 3500р.</li>
								<li>Остеопатический массаж 60 минут 7000р.</li>
								<li>Остеопатический массаж 30 минут 4000р.</li>
								<li>Лечебный массаж 60 минут 7000р.</li>
								<li>Лечебный массаж 30 минут 4000р.</li>
								<li>Коррекция осанки 6500р.</li>
								<li>Устранение боли, зажимов 6500р.</li>
								<li>Лимфатическая терапия 8000р.</li>
								<li>Биоэнергорегуляция БЭМ 4000р.</li>
								<li>Висцеральный массаж 4000р.</li>
							</ul>
						</div>
					)}
				</div>
			) : (
				''
			)}
		</div>
	)
}
