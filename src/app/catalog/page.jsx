import {
	FIVE_DATA_PCKG,
	MASS_DATA_PCKG,
	OSTEO_PCKG,
	TEN_DATA_PCKG,
} from '../../../public/data/data'
import SubTitle from '../../components/title/subTitle'
import styles from './catalog.module.scss'

const Catalog = () => {
	return (
		<section className={styles.Catalog}>
			<hr />
			<SubTitle color={'#018ABE'} content={'Стоимость услуг на массаж'} />
			<div className={styles.Catalog_prices}>
				<h3 className='pb-6'>Разовые услуги</h3>
				<ul className={styles.Catalog_prices__once}>
					{MASS_DATA_PCKG.map(mass => (
						<li key={mass.id}>
							{mass.minutes} минут - {mass.price} рублей
						</li>
					))}
				</ul>
				<h3 className='pb-6 mt-14'>Абонемент 5 сеансов</h3>
				<ul>
					{FIVE_DATA_PCKG.map(five => (
						<li className='pb-5' key={five.id}>
							{five.minutes} минут - {five.price} рублей <br />({five.perOne}р.
							за сеанс)
						</li>
					))}
				</ul>
				<h3 className='my-6'>Абонемент 10 сеансов</h3>
				<ul>
					{TEN_DATA_PCKG.map(ten => (
						<li className='pb-5' key={ten.id}>
							{ten.minutes} минут - {ten.price} рублей <br />({ten.perOne}р. за
							сеанс)
						</li>
					))}
				</ul>
				<h3 className='my-6'>Услуги остеопата</h3>
				<ul>
					{OSTEO_PCKG.map(osteo => (
						<li className='pb-5' key={osteo.id}>
							{osteo.name} - {osteo.price} рублей
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}

export default Catalog
