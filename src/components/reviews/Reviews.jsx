import SubTitle from '../title/subTitle'
import { revData } from './revews'
import styles from './Reviews.module.scss'

const Reviews = () => {
	return (
		<section className='md:mt-36 mt-16'>
			<SubTitle color={'#018ABE'} content={'Отзывы'} />
			<div className={styles.Reviews}>
				{revData.map(({ id, name, content }) => (
					<div key={id} className={styles.Reviews_card}>
						<h4>{name}</h4>
						<p className='text-sm pt-5'>{content}</p>
					</div>
				))}
			</div>
		</section>
	)
}

export default Reviews
