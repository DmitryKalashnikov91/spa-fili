'use client'
import SubTitle from '@/components/title/subTitle'
import GoBack from '@/ui/GoBack'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { DATA } from '../../../public/data/data'
import styles from './Seances.module.scss'

const Seances = () => {
	const router = useRouter()
	return (
		<div className={styles.Seances}>
			<SubTitle color={'#018ABE'} content={'Сеансы Спа Фили'} />
			{DATA.map(
				seance =>
					!seance.isHidden && (
						<div key={seance.id} className={styles.Seances_block}>
							<Image src={seance.imgUrl} />
							<div>
								<h3 className='text-center py-4 font-bold '>{seance.name}</h3>
								<p className='md:pl-10 text-justify md:leading-8 tracking-wide'>
									{seance.content}...
								</p>
								<button
									onClick={() => router.push(`/seances${seance.linkTo}`)}
									className='bg-sky-600 px-6  py-2 rounded active:bg-sky-400 md:ml-10 mt-2'
								>
									Подробнее
								</button>
							</div>
						</div>
					)
			)}
			<GoBack />
		</div>
	)
}

export default Seances
