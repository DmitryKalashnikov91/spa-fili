import Image from 'next/image'
import Link from 'next/link'
import { BsCalendar3, BsFillGeoAltFill } from 'react-icons/bs'
import { SiMoscowmetro } from 'react-icons/si'
import styles from './Contacts.module.scss'
import map from './maps.png'
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
				<Image src={map} width={740} alt='карта spa fili' />
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
					<button>
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
