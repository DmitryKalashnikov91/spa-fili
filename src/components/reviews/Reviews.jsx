import SubTitle from '../title/subTitle'
import styles from './Reviews.module.scss'
import CustomSlider from './slider/CustomSlider'

const Reviews = () => {
	return (
		<section className='md:mt-36 mt-16' id='reviews'>
			<SubTitle color={'#018ABE'} content={'Отзывы'} />
			<div className={styles.Reviews}>
				<CustomSlider />
			</div>
		</section>
	)
}

export default Reviews
