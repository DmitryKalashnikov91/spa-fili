import SubTitle from '@/components/title/subTitle'
import GoBack from '@/ui/GoBack'
import Image from 'next/image'
import cellulite from '../../../../public/assets/cellulite.png'
import { ROBOTO_FNT } from '../CONSTS'
import styles from './cellulite.module.scss'

const Cellulite = () => {
	return (
		<div className={styles.Cellulite}>
			<SubTitle color={'#018ABE'} content={'Сеансы Спа Фили'} />
			<div className='flex flex-col-reverse md:flex-row items-center justify-center mt-10'>
				<div>
					<h3 className='py-8 text-3xl'>Антицеллюлитный массаж</h3>
					<ul
						className={`text-justify w-full list-disc ` + ROBOTO_FNT.className}
					>
						<p>
							Антицеллюлитный массаж — это комплекс процедур, основная цель
							которых — активизировать обменные процессы в подкожной жировой
							клетчатке. Применяются механические и рефлекторные воздействия на
							поражённые области.
						</p>
						<h3 className='font-bold pt-4'>
							После курса антицеллюлитного массажа происходит:
						</h3>
						<li>
							<b>Улучшение кровообращения.</b> Массаж стимулирует приток крови к
							массируемой области, обеспечивая улучшение общего кровообращения.
						</li>
						<li>
							<b>Стимуляция лимфотока.</b> При помощи массажа улучшается
							лимфодренаж, что помогает уменьшить отёчность и ускорить выведение
							токсинов, шлаков и лишней жидкости из организма.
						</li>
						<li>
							<b>Разбивание жировых отложений.</b> С помощью специфических
							приёмов массажа разрушаются и распределяются жировые отложения,
							что помогает улучшить контуры тела и снизить проявления целлюлита.
						</li>
						<li>
							<b>Улучшение состояния кожи.</b> Массаж помогает стимулировать
							процессы обновления кожи, что приводит к улучшению её тонуса,
							эластичности и общего вида.
						</li>
						<li>
							<b>Расслабление.</b> Кроме физиологических эффектов, массаж
							помогает уменьшить уровень стресса и общую напряжённость, что
							благоприятно влияет на общее самочувствие.
						</li>
					</ul>
				</div>
				<Image src={cellulite} alt='антицеллюлитный массаж' />
			</div>
			<GoBack />
		</div>
	)
}

export default Cellulite
