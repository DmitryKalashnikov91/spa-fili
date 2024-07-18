import {
	ELEVEN_DATA_PCKG,
	MASS_DATA_PCKG,
	OSTEO_PCKG,
	SIX_DATA_PCKG,
} from '../../../public/data/data'
import SubTitle from '../../components/title/subTitle'
import styles from './catalog.module.scss'

const Catalog = () => {
	return (
		<section className={styles.Catalog}>
			<hr />
			<SubTitle color={'#018ABE'} content={'Стоимость услуг'} />
			<div className={styles.Catalog_prices}>
				<h3 className='pb-6'>Разовые услуги</h3>
				<ul className={styles.Catalog_prices__once}>
					{MASS_DATA_PCKG.map(mass => (
						<li key={mass.id}>
							{mass.minutes} минут - {mass.price} рублей
						</li>
					))}
				</ul>
				<h3 className='pb-6 mt-14'>Абонемент 6 сеансов</h3>
				<ul>
					{SIX_DATA_PCKG.map(six => (
						<li className='pb-5' key={six.id}>
							{six.minutes} минут - {six.price} рублей <br />({six.perOne}р. за
							сеанс)
						</li>
					))}
				</ul>
				<h3 className='my-6'>Абонемент 11 сеансов</h3>
				<ul>
					{ELEVEN_DATA_PCKG.map(eleven => (
						<li className='pb-5' key={eleven.id}>
							{eleven.minutes} минут - {eleven.price} рублей <br />(
							{eleven.perOne}р. за сеанс)
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
