import Link from 'next/link'
import SubTitle from '../title/subTitle'
import styles from './Reviews.module.scss'
import CustomSlider from './slider/CustomSlider'

const Reviews = () => {
	return (
		<section
			className='md:mt-22 mt-16 flex flex-col justify-center'
			id='reviews'
		>
			<SubTitle color={'#018ABE'} content={'Отзывы'} />
			<div className={styles.Reviews}>
				<CustomSlider />
			</div>
			<Link
				className='text-center text-xl tracking-widest underline pt-4'
				target='_blank'
				href='https://yandex.ru/maps/org/spafili/62360509408/reviews/?ll=37.508556%2C55.744188&utm_content=more-reviews&utm_medium=reviews&utm_source=maps-reviews-widget&z=13'
			>
				Все отзывы
			</Link>
		</section>
	)
}

export default Reviews
