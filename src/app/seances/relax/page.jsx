import SubTitle from '@/components/title/subTitle'
import GoBack from '@/ui/GoBack'
import Image from 'next/image'
import relax from '../../../../public/assets/relax.png'
import { ROBOTO_FNT } from '../CONSTS'
import styles from './relax.module.scss'

const Relax = () => {
	return (
		<div className={styles.Relax}>
			<SubTitle color={'#018ABE'} content={'Сеансы Спа Фили'} />
			<div className='flex flex-col-reverse md:flex-row items-center justify-center mt-10'>
				<div>
					<h3 className='py-8 text-2xl'>Расслабляющий массаж</h3>
					<ul className={`text-justify w-full ` + ROBOTO_FNT.className}>
						<li>
							Расслабляющий массаж — это процедура, позволяющая снять физическое
							и нервное напряжение, расслабить мышцы, улучшить настроение,
							повысить иммунитет. Главная цель воздействия — восстановить
							гармоничное взаимодействие между головным мозгом и мышцами, так
							как эмоциональные переживания влекут за собой напряжение мышц.
						</li>
						<li>
							Расслабляющий массаж рекомендуется при длительном мышечном и
							нервном перенапряжении, переутомлении, бессоннице, синдроме
							хронической усталости и астенических состояниях. Он запускает
							внутренние резервы саморегуляции и восстановления ресурсов
							организма, повышает работоспособность.
						</li>
						<li>
							Во время расслабляющего массажа через рецепторы нервных окончаний,
							расположенные на коже, мозг получает позитивные сигналы о том, что
							«всё в порядке». От прикосновений рук мастера организм человека
							вырабатывает эндорфины — гормоны радости, хорошего настроения и
							счастья.
						</li>
						<li>
							После проведения курса расслабляющего массажа нормализуется и
							гармонизируется эмоциональное и психосоматическое состояние,
							придёт ощущение спокойствия, сбалансируется внутренняя энергетика.
						</li>
					</ul>
				</div>
				<Image src={relax} alt='Расслабляющий массаж' />
			</div>
			<GoBack />
		</div>
	)
}

export default Relax
