import Image from 'next/image'
import SubTitle from '../title/subTitle'
import styles from './Seances.module.scss'
import cellulite from './assets/cellulite.png'
import classic from './assets/classic.png'
import head from './assets/head.png'
import other from './assets/other.png'
import relax from './assets/relax.png'

const Seances = () => {
	return (
		<section id='seances' className='md:mt-36 mt-20 w-full'>
			<SubTitle color={'#018ABE'} content={'Сеансы Spa Fili'} />
			<div className={styles.Seances}>
				<div className={styles.div1}>
					<Image src={classic} alt='seances' width={416} height={564} />
					<p className='pb-20'>Классический массаж</p>
				</div>

				<div>
					<Image src={relax} width={416} height={258} alt='relax' />
					<p>Расслабляющий массаж</p>
				</div>
				<div>
					<Image src={head} width={416} height={258} alt='швз массаж' />
					<p>Массаж шейно-воротниковой зоны</p>
				</div>
				<div>
					<Image
						src={cellulite}
						width={416}
						height={258}
						alt='антицеллюлитный массаж'
					/>
					<p>Антицеллюлитный массаж</p>
				</div>
				<div>
					<Image src={other} width={416} height={258} alt='виды массажа' />
					<p>Другие виды массажа</p>
				</div>
			</div>
		</section>
	)
}

export default Seances
