import { nanoid } from 'nanoid'
import konst from './assets/konst.png'
import Mariya from './assets/mary.png'
import Nikita from './assets/nikita.png'
import Oleg from './assets/Oleg2.png'
import Olga from './assets/olga.png'

export const SpecJSON = [
	{
		id: nanoid(6),
		name: 'Ольга',
		urlImg: Olga,
		content:
			'7 лет стажа - все виды ручного массажа (Классический, Антицеллюлитный , Лимфодренажный, Аппаратный массаж (RF-лифтинг, Indiba, кавитация, вакуумный, вибрационный.), Коррекция фигуры, Скрабирование тела, Обертывание)',
	},
	{
		id: nanoid(6),
		name: 'Константин',
		urlImg: konst,
		content:
			'20 лет стажа - все виды ручного массажа (Классический массаж,  Антицеллюлитный, Лимфодренажный, Спортивный, Баночный, Расслабляющий массаж, Массаж лица (классический)).',
	},

	{
		id: nanoid(6),
		name: 'Мария',
		urlImg: Mariya,
		content:
			'Мария - врач, ортопед-травматолог, остеопат, реабилитолог. Стаж работы 12 лет. Ортопед-травматолог 7 лет, остеопат, реабилитолог 7 лет.',
	},
	{
		id: nanoid(6),
		name: 'Олег',
		urlImg: Oleg,
		content:
			'Опыт 6 лет. Классический, спортивный, лимфодреннажный, антицеллюлитный, релаксирующий, глубокотканный/миофасциальный, работа с триггерными точками, устранение миофасциального болевого синдрома, мобилизация суставов и мягких тканей, гуаша лица',
	},
	{
		id: nanoid(6),
		name: 'Никита',
		urlImg: Nikita,
		content:
			'Опыт 2 года. Виды массажа: Классический, Антицеллюлитный, Спортивный, Лимфодренжаный, Мануально-мышечным тестированием.',
	},
]
