'use client'
import { useState } from 'react'
import { DATA } from '../../../public/data/data'
import SubTitle from '../title/subTitle'
import { InteractiveCard } from './InteractiveCard'
import styles from './Seances.module.scss'

const Seances = () => {
	const [title, setTitle] = useState([])
	const cardDataArray = DATA.slice(0, 8).map(item => ({
		title: item.name,
		description: item.content,
		imgUrl: item.imgUrl,
	}))

	const cardFourData = {
		title: DATA[3].name,
		description: DATA[3].content,
		image: DATA[3].imgUrl,
	}
	return (
		<div className='pt-36'>
			<SubTitle color={'#018ABE'} content={'Стоимость сеансов'} />
			<section id='seances' className=' md:mt-36 mt-20 '>
				<div className={styles.Seances}>
					{cardDataArray.map(cardData => (
						<InteractiveCard key={cardData.title} initialData={cardData} />
					))}
				</div>
			</section>
		</div>
	)
}

export default Seances
