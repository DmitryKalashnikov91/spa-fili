import Image from 'next/image'
import SubTitle from '../title/subTitle'
import styles from './Specialists.module.scss'
import konstantine from './assets/konst.png'
import Mariya from './assets/mariya.png'
import Olga from './assets/olga.png'

const specData = [
	{
		id: 1,
		name: 'Ольга',
		urlImg: Olga,
		content:
			'Ольга: 7 лет стажа - все виды ручного массажа (Классический, Антицеллюлитный , Лимфодренажный, Аппаратный массаж (RF-лифтинг, Indiba, кавитация, вакуумный, вибрационный.), Коррекция фигуры, Скрабирование тела, Обертывание)',
	},
	{
		id: 2,
		name: 'Константин',
		urlImg: konstantine,
		content:
			'Константин: 20 лет стажа - все виды ручного массажа (Классический массаж,  Антицеллюлитный, Лимфодренажный, Спортивный, Баночный, Расслабляющий массаж, Массаж лица (классический)).',
	},
	{
		id: 3,
		name: 'Мария',
		urlImg: Mariya,
		content:
			'Мария: остеопат-массажист  - 15 лет стажа, мед.образование. Все виды массажа, плюс остеопатия.',
	},
]

const Specialists = () => {
	return (
		<>
			<div className={styles.Specialists}>
				<SubTitle color={'#018ABE'} content={'Специалисты'} />
				{specData.map(spec => (
					<div className={styles.Specialists_wrapper} key={spec.id}>
						<Image src={spec.urlImg} alt={spec.name} />
						<div className={styles.Specialists_wrapper__content}>
							<h4>{spec.name}</h4>
							<p>{spec.content}</p>
						</div>
					</div>
				))}
			</div>
		</>
	)
}

export default Specialists
