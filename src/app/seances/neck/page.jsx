import SubTitle from '@/components/title/subTitle'
import Image from 'next/image'
import neck from '../../../../public/assets/head.png'
import styles from './neck.module.scss'

const Neck = () => {
	return (
		<div className={styles.Neck}>
			<SubTitle color={'#018ABE'} content={'Сеансы Спа Фили'} />
			<div className='flex flex-col-reverse md:flex-row items-center justify-center mt-10'>
				<ul className='text-justify w-full'>
					<h3 className='py-8 text-2xl'>Массаж шейно-воротниковой зоны</h3>
					<li>
						Шейно-воротниковая зона — это область в области спины, включающая
						шейный отдел позвоночника, мышцы шеи и надплечий. Она постоянно
						подвергается высоким нагрузкам.
					</li>
					<li>
						Массаж шейно-воротниковой зоны — процедура, позволяющая снять
						напряжение с шейных и плечевых мышц и устранить болевые ощущения на
						этом участке. Такое воздействие является профилактикой остеохондроза
						и невралгии, а также применяется при лечении этих заболеваний.
					</li>

					<li>
						Перед применением массажа рекомендована консультация врача, так как
						процедура имеет противопоказания.
					</li>
				</ul>
				<Image src={neck} alt='Расслабляющий массаж' />
			</div>
		</div>
	)
}

export default Neck