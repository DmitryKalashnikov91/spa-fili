import { nanoid } from 'nanoid'
import cellulite from '../assets/cellulite.png'
import classic from '../assets/Class.png'
import cupping from '../assets/cupping.png'
import device from '../assets/device.png'
import head from '../assets/head.png'
import limf from '../assets/limf.png'
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
			'<div>60 минут 4500р.</div> <div>90 минут 6200р.</div> <div>120 минут 8500р.</div>',
	},
	{
		id: nanoid(6),
		name: 'Расслабляющий массаж',
		imgUrl: relax,
		linkTo: '/relax',
		isMain: true,
		content: ' <div>90 минут 6200р.</div> <div>120 минут 8500р.</div>',
	},
	{
		id: nanoid(6),
		name: 'Массаж шейно-воротниковой зоны',
		imgUrl: head,
		linkTo: '/neck',
		isMain: true,
		content: '<div>30 минут 2800р.</div> <div>45 минут 6200р.</div> ',
	},
	{
		id: nanoid(6),
		name: 'Антицеллюлитный массаж',
		imgUrl: cellulite,
		linkTo: '/cellulite',
		isMain: true,
		content:
			'<div>30 минут 2800р.</div> <div>45 минут 3700р.</div> <div>60 минут 4700р.</div>',
	},

	{
		id: nanoid(6),
		name: 'Баночный массаж',
		imgUrl: cupping,
		linkTo: '/cupping',
		isMain: false,
		content: '<div>45 минут 3700р.</div> <div>60 минут 4500р.</div>',
	},
	{
		id: nanoid(6),
		name: 'Спортивный массаж',
		imgUrl: sport,
		isMain: false,
		content:
			'<div>45 минут 3700р.</div> <div>60 минут 4500р.</div> <div>90 минут 6200р.</div>',
	},
	{
		id: nanoid(6),
		name: 'Лимфодренажный массаж',
		imgUrl: limf,
		isMain: false,
		content: '<div>60 минут 4500р.</div> <div>90 минут 6200р.</div> ',
	},
	{
		id: nanoid(6),
		name: 'Аппаратный массаж ',
		imgUrl: device,
		isMain: false,
		content:
			'<div>45 минут 3700р.</div> <div>60 минут 4500р.</div> <div>90 минут 6200р.</div>',
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
