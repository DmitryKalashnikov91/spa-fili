import { nanoid } from 'nanoid'
import Dmitry from './assets/dmitriy.png'
import konst from './assets/konst.png'
import Mariya from './assets/mary.png'
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
			'Остеопат-массажист  - 15 лет стажа, мед.образование. Все виды массажа, плюс остеопатия.',
	},
	{
		id: nanoid(6),
		name: 'Дмитрий',
		urlImg: Dmitry,
		content:
			'Опыт 5 лет. Все виды ручного массажа. Массаж лица: Гуаша, Скульптурирующий, Буккальный, Классический, Лимфодренажный.',
	},
]
