'use client'
import Image from 'next/image'

import { useRouter } from 'next/navigation'
import SubTitle from '../title/subTitle'
import styles from './Seances.module.scss'

import { DATA } from '../../../public/data/data'

const Seances = () => {
	const router = useRouter()

	return (
		<section id='seances' className=' md:mt-36 mt-20 '>
			<SubTitle color={'#018ABE'} content={'Сеансы Спа Фили'} />
			<div className={styles.Seances}>
				{DATA.map(
					item =>
						item.isMain && (
							<div
								key={item.id}
								onClick={() => router.push(`/seances${item.linkTo}`)}
							>
								<Image src={item.imgUrl} alt={item.name} />
								<p className='text-center'>{item.name}</p>
							</div>
						)
				)}
				{/* <div onClick={() => router.push('/classic')} className={styles.div1}>
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
				</div> */}
			</div>
		</section>
	)
}

export default Seances
