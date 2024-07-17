import { nanoid } from 'nanoid'
import cellulite from '../assets/cellulite.png'
import classic from '../assets/classic.png'
import cupping from '../assets/cupping.png'
import head from '../assets/head.png'
import other from '../assets/other.png'
import relax from '../assets/relax.png'

export const DATA = [
	{
		id: nanoid(6),
		name: 'Классический массаж',
		imgUrl: classic,
		linkTo: '/classic',
		isMain: true,
		content:
			'Классический массаж — наиболее распространённый вид массажа, который используется для расслабления мышц и снятия стресса. Он включает в себя различные техники, такие как разминание, размягчение, потирание и вибрация.',
	},
	{
		id: nanoid(6),
		name: 'Расслабляющий массаж',
		imgUrl: relax,
		linkTo: '/relax',
		isMain: true,
		content:
			'	Расслабляющий массаж — это процедура, позволяющая снять физическое и нервное напряжение, расслабить мышцы, улучшить настроение, повысить иммунитет. Главная цель воздействия — восстановить гармоничное взаимодействие между головным мозгом и мышцами, так как эмоциональные переживания влекут за собой напряжение мышц.',
	},
	{
		id: nanoid(6),
		name: 'Массаж шейно-воротниковой зоны',
		imgUrl: head,
		linkTo: '/neck',
		isMain: true,
		content:
			'Массаж шейно-воротниковой зоны — процедура, позволяющая снять напряжение с шейных и плечевых мышц и устранить болевые ощущения на этом участке. Такое воздействие является профилактикой остеохондроза и невралгии, а также применяется при лечении этих заболеваний.',
	},
	{
		id: nanoid(6),
		name: 'Антицеллюлитный массаж',
		imgUrl: cellulite,
		linkTo: '/cellulite',
		isMain: true,
		content:
			'Антицеллюлитный массаж — это комплекс процедур, основная цель которых — активизировать обменные процессы в подкожной жировой клетчатке. Применяются механические и рефлекторные воздействия на поражённые области.',
	},
	{
		id: nanoid(6),
		name: 'Все виды массажа',
		imgUrl: other,
		linkTo: '/',
		isMain: true,
		isHidden: true,
	},
	{
		id: nanoid(6),
		name: 'Баночный массаж',
		imgUrl: cupping,
		linkTo: '/cupping',
		isMain: false,
		content:
			'Баночный массаж — это вид массажа, имеющий важное терапевтическое значение. В специальных ёмкостях («массажных колоколах») искусственно создаётся вакуум, что способствует снабжению тканей кислородом, стимулирует обмен веществ и улучшает кровообращение.',
	},
]

export const MASS_DATA_PCKG = [
	{ id: nanoid(6), minutes: 30, price: 1950 },
	{ id: nanoid(6), minutes: 45, price: 2700 },
	{ id: nanoid(6), minutes: 60, price: 3200 },
	{ id: nanoid(6), minutes: 90, price: 4850 },
	{ id: nanoid(6), minutes: 120, price: 6000 },
]

export const SIX_DATA_PCKG = [
	{ id: nanoid(6), minutes: 30, price: 10200, perOne: 1700 },
	{ id: nanoid(6), minutes: 45, price: 14700, perOne: 2450 },
	{ id: nanoid(6), minutes: 60, price: 16800, perOne: 2800 },
	{ id: nanoid(6), minutes: 90, price: 25200, perOne: 4200 },
]
export const ELEVEN_DATA_PCKG = [
	{ id: nanoid(6), minutes: 30, price: 18000, perOne: 1600 },
	{ id: nanoid(6), minutes: 45, price: 25800, perOne: 2300 },
	{ id: nanoid(6), minutes: 60, price: 30000, perOne: 2700 },
	{ id: nanoid(6), minutes: 90, price: 44000, perOne: 4000 },
]
