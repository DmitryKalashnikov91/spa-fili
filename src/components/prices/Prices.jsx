import Image from 'next/image'
import SubTitle from '../title/subTitle'
import styles from './Prices.module.scss'
import certificate from './cert.jpg'

const priceData = [
	{
		id: 1,
		name: 'Разовые услуги',
		price: '1 950',
	},
	{
		id: 2,
		name: 'Абонемент 6 сеансов',
		price: '9 600',
	},
	{
		id: 3,
		name: 'Абонемент 12 сеансов',
		price: '18 000',
	},
	{
		id: 4,
		name: 'Услуги остеопата',
		price: '1 000',
	},
]

const Prices = () => {
	return (
		<section className={styles.Prices}>
			<SubTitle color={'#018ABE'} content={'Стоимость сеансов'} />
			<div className={styles.Prices_content}>
				<div className={styles.Prices_content__catalogue}>
					<ul>
						{priceData.map(({ id, name, price }) => (
							<li key={id} className='grid grid-cols-2 gap-10 md:gap-24 pb-6'>
								{' '}
								<p className='flex gap-2 md:gap-6'>
									<svg
										width='34'
										height='17'
										viewBox='0 0 34 17'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M0 0H17C26.3888 0 34 7.61116 34 17H17C7.61116 17 0 9.38884 0 0Z'
											fill='#018ABE'
										/>
									</svg>
									{name}
								</p>
								<p className=''>от {price}р.</p>
							</li>
						))}
						<li className='text-center pt-8 text-lg underline'>Подробнее...</li>
					</ul>
				</div>
				<div className={styles.Prices_content__certificate}>
					<Image
						src={certificate}
						width={420}
						className='rounded'
						alt='сертификат spa fili'
					/>
					<p className='text-center'>
						<a href='#' className='text-base underline'>
							Подарочный сертификат
						</a>
					</p>
				</div>
			</div>
		</section>
	)
}

export default Prices
