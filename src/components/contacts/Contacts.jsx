import Image from 'next/image'
import { BsCalendar3, BsFillGeoAltFill } from 'react-icons/bs'
import { SiMoscowmetro } from 'react-icons/si'
import styles from './Contacts.module.scss'
import map from './maps.png'
const contactsData = [
	{
		id: 1,
		adress: 'Багратионовский пр-д дом 5, 5 этаж',
		metro: 'м. Фили',
		name: 'Spa Alex',
	},
	{
		id: 2,
		adress: 'ул. Большая Филевская 19/18 к.2',
		metro: 'м. Багратионовская',
		name: 'Spa Fili',
	},
]

const Contacts = () => {
	return (
		<section className={styles.Contacts}>
			<div className={styles.Contacts_map}>
				<Image src={map} width={740} />
			</div>

			<ul className={styles.Contacts_card1}>
				<span>Spa Alex</span>
				<li>
					<BsFillGeoAltFill />
					Багратионовский пр-д дом 5, 5 этаж
				</li>
				<li>
					<SiMoscowmetro /> м. Фили
				</li>
				<li>
					<BsCalendar3 />
					Запись по договоренности
				</li>
				<button>Записаться на сеанс</button>
			</ul>
			<ul className={styles.Contacts_card2}>
				<span>Spa Fili</span>
				<li>
					<BsFillGeoAltFill />
					ул. Большая Филевская 19/18 к.2
				</li>
				<li>
					<SiMoscowmetro />
					м. Багратионовская
				</li>
				<li>
					<BsCalendar3 />
					Запись по договоренности
				</li>
				<button>Записаться на сеанс</button>
			</ul>
		</section>
	)
}

export default Contacts
