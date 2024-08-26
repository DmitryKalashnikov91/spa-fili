import { nanoid } from 'nanoid'
import Elena from './assets/elena.png'
import konst from './assets/konst.png'
import Mariya from './assets/mariya.png'
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
]
