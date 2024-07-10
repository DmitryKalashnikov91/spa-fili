import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'
import styles from './headerSM.module.scss'

const HeaderSM = () => {
	const [isOpenBurger, setIsOpenBurger] = useState(false)
	const handleClickBurger = () => {
		setIsOpenBurger(!isOpenBurger)
	}
	return (
		<header className={styles.HeaderSM}>
			<img src='spa.png' alt='logo spa fili' width={50} />
			<button className='bg-sky-600 px-6  py-2 rounded'>
				Записаться на сеанс
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
						<li>Главная</li>
						<li>О нас</li>
						<li>Отзывы</li>
						<li>Контакты</li>
					</ul>
				</nav>
			)}
		</header>
	)
}

export default HeaderSM
