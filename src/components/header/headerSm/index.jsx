import Link from 'next/link'
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'
import styles from './headerSM.module.scss'

const menu = [
	{
		id: 1,
		name: 'Главная',
		link: '/',
	},
	{
		id: 2,
		name: 'О нас',
		link: '/#seances',
	},
	{
		id: 3,
		name: 'Отзывы',
		link: '/#reviews',
	},
	{
		id: 4,
		name: 'Контакты',
		link: '/#contacts',
	},
]

const HeaderSM = () => {
	const [isOpenBurger, setIsOpenBurger] = useState(false)
	const handleClickBurger = () => {
		setIsOpenBurger(!isOpenBurger)
	}
	return (
		<header className={styles.HeaderSM}>
			<Link href='/'>
				<img src='spa.png' alt='logo spa fili' width={50} />
			</Link>
			<button className='bg-sky-600 text-xl px-6  py-2 rounded active:bg-sky-400'>
				<Link href='https://dikidi.net/g367474?p=0.sp' target='_blank'>
					Записаться на сеанс
				</Link>
			</button>
			<div onClick={handleClickBurger}>
				{!isOpenBurger ? (
					<GiHamburgerMenu className=' mr-4 ' size={30} />
				) : (
					<GrClose className=' mr-4' size={30} />
				)}
			</div>
			{isOpenBurger && (
				<nav className={styles.HeaderSM_menu}>
					<ul>
						{menu.map(({ id, name, link }) => (
							<li key={id}>
								<Link onClick={() => setIsOpenBurger(false)} href={link}>
									{name}
								</Link>
							</li>
						))}
					</ul>
				</nav>
			)}
		</header>
	)
}

export default HeaderSM
