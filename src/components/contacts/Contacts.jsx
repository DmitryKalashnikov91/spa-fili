import Link from 'next/link'
import { BsCalendar3, BsFillGeoAltFill } from 'react-icons/bs'
import { SiMoscowmetro } from 'react-icons/si'
import styles from './Contacts.module.scss'
const contactsData = [
	{
		id: 1,
		adress: 'Багратионовский пр-д дом 5, 5 этаж',
		metro: 'м. Фили',
		name: 'Spa Fili (Alex)',
		href: 'https://dikidi.net/g367474?p=1.sp-pi&c=922352',
	},
	{
		id: 2,
		adress: 'ул. Большая Филевская 19/18 к.2',
		metro: 'м. Багратионовская',
		name: 'Spa Fili',
		href: 'https://dikidi.net/g367474?p=1.sp-pi&c=1608356',
	},
]

const Contacts = () => {
	return (
		<section className={styles.Contacts} id='contacts'>
			<div className={styles.Contacts_map}>
				<iframe
					src='https://yandex.ru/map-widget/v1/?um=constructor%3A4902db93dcb2167162015f2aa7e95122afed8c134c6c16009323d6f3bc3f3435&amp;source=constructor'
					width='600'
					height='450'
					frameborder='0'
				></iframe>
			</div>

			{contactsData.map(contact => (
				<ul className={styles.Contacts_card} key={contact.id}>
					<span>{contact.name}</span>
					<li>
						<BsFillGeoAltFill />
						{contact.adress}
					</li>
					<li>
						<SiMoscowmetro /> {contact.metro}
					</li>
					<li>
						<BsCalendar3 />
						Запись по договоренности
					</li>
					<button className='hover:shadow-xl hover:bg-slate-200'>
						<Link href={contact.href} target='_blank'>
							Записаться на сеанс
						</Link>
					</button>
				</ul>
			))}
		</section>
	)
}

export default Contacts
