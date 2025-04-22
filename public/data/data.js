import { nanoid } from 'nanoid'
import cellulite from '../assets/cellulite.png'
import classic from '../assets/classic.png'
import cupping from '../assets/cupping.png'
import device from '../assets/device.png'
import head from '../assets/head.png'
import limf from '../assets/limf.png'
import other from '../assets/other.png'
import relax from '../assets/relax.png'
import sport from '../assets/sport.png'

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
	{
		id: nanoid(6),
		name: 'Спортивный массаж',
		imgUrl: sport,
		isMain: false,
		content:
			'Спортивный массаж уменьшает влияние молочной кислоты на организм, снижает нагрузку на организм, повышает выносливость организма, увеличивает работоспособность, снимает усталость и восстанавливает общий тонус после повышенных нагрузок.',
	},
	{
		id: nanoid(6),
		name: 'Лимфодренажный массаж',
		imgUrl: limf,
		isMain: false,
		content:
			'Лимфодренажный массаж — улучшает лимфоток, с которым из организма выводится лишняя жидкость и токсические вещества, улучшаются обменные процессы, а клетки получают больше кислорода и питания. Основное действие лимфодренажа — увеличение скорости лимфотока.',
	},
	{
		id: nanoid(6),
		name: 'Аппаратный массаж ',
		imgUrl: device,
		isMain: false,
		content:
			'Аппаратный массаж – это название для нескольких методик массажа, который выполняется специальными устройствами - Indiba, вакуум, RF-лифтинг, кавитация. Благодаря глубокому воздействию эффект гораздо лучше чем после ручных техник. Подходит для коррекции фигуры - похудение, подтяжка кожи, убирает целлюлит и отечность, лимфодренажный эффект.',
	},
]

export const MASS_DATA_PCKG = [
	{ id: nanoid(6), minutes: 30, price: 2800 },
	{ id: nanoid(6), minutes: 45, price: 3700 },
	{ id: nanoid(6), minutes: 60, price: 4500 },
	{ id: nanoid(6), minutes: 90, price: 6200 },
	{ id: nanoid(6), minutes: 120, price: 8500 },
]

export const FIVE_DATA_PCKG = [
	{ id: nanoid(6), minutes: 30, price: 13000, perOne: 2600 },
	{ id: nanoid(6), minutes: 45, price: 17000, perOne: 3400 },
	{ id: nanoid(6), minutes: 60, price: 21000, perOne: 4200 },
	{ id: nanoid(6), minutes: 90, price: 29500, perOne: 5900 },
]
export const TEN_DATA_PCKG = [
	{ id: nanoid(6), minutes: 30, price: 24000, perOne: 2400 },
	{ id: nanoid(6), minutes: 45, price: 33000, perOne: 3300 },
	{ id: nanoid(6), minutes: 60, price: 41000, perOne: 4100 },
	{ id: nanoid(6), minutes: 90, price: 57000, perOne: 5700 },
]
export const OSTEO_PCKG = [
	{
		id: nanoid(6),
		name: 'Осмотр, Рекомендации, диагностика',
		price: 3500,
	},
	{
		id: nanoid(6),
		name: 'Коррекция осанки',
		price: 6500,
	},
	{
		id: nanoid(6),
		name: 'Остеопатический массаж',
		price: 7000,
	},
	{
		id: nanoid(6),
		name: 'Устранение боли, зажимов смещений, блоков',
		price: 6500,
	},
	{
		id: nanoid(6),
		name: 'Лимфатическая терапия',
		price: 8000,
	},
	{
		id: nanoid(6),
		name: 'Биоэнергорегуляция (БЭМ)',
		price: 4000,
	},
	{
		id: nanoid(6),
		name: 'Висцеральный массаж',
		price: 4000,
	},
]
