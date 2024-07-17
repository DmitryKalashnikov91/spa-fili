import SubTitle from '../title/subTitle'
import styles from './Main.module.scss'

const Main = () => {
	return (
		<div className={styles.Main}>
			<div className={styles.Main_bg}>
				<div className={styles.Main_bg__head}>
					<SubTitle content={'Массажный салон'} color={'white'} />
				</div>
				<h1 className='tracking-widest'>СПА Фили</h1>
			</div>
		</div>
	)
}

export default Main
