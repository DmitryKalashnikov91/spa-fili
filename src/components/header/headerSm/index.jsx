import { GiHamburgerMenu } from 'react-icons/gi'
import styles from './headerSM.module.scss'

const HeaderSM = () => {
	return (
		<header className={styles.HeaderSM}>
			<img src='spa.png' alt='logo spa fili' width={50} />
			<button className='bg-sky-600 px-6  py-2 rounded'>
				Записаться на сеанс
			</button>
			<GiHamburgerMenu className=' mr-4 text-3xl' />
		</header>
	)
}

export default HeaderSM
