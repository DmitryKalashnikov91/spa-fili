import SubTitle from '@/components/title/subTitle'
import GoBack from '@/ui/GoBack'
import Image from 'next/image'
import cupping from '../../../../public/assets/cupping.png'
import styles from './cupping.module.scss'

const Relax = () => {
	return (
		<div className={styles.Cupping}>
			<SubTitle color={'#018ABE'} content={'Сеансы Спа Фили'} />
			<div className='flex flex-col-reverse md:flex-row items-center justify-center mt-10'>
				<ul className='text-justify w-full'>
					<h3 className='py-8 text-2xl'>Баночный массаж</h3>
					<li>
						Баночный массаж — это вид массажа, имеющий важное терапевтическое
						значение. В специальных ёмкостях («массажных колоколах»)
						искусственно создаётся вакуум, что способствует снабжению тканей
						кислородом, стимулирует обмен веществ и улучшает кровообращение.
					</li>
					<li>
						Процедура положительно влияет на организм человека в целом. Она
						способствует укреплению мышц, снижению болевого синдрома разной
						природы, а также устраняет кашель.
					</li>
					<li>
						Баночный массаж показан при заболеваниях суставов и позвоночника.
						Рекомендуется пройти курс тем, кто испытывает неприятные ощущения в
						мышцах и знает о мигренях.
					</li>
					<li>
						Процедура эффективна при заболеваниях органов дыхания, нервной
						системы, опорно-двигательного аппарата. Спортсменам и всем, кто
						ведёт активный образ жизни, после тренировок методика поможет
						быстрее восстановиться.
					</li>
				</ul>
				<Image src={cupping} alt='Баночный массаж' />
			</div>
			<GoBack />
		</div>
	)
}

export default Relax
