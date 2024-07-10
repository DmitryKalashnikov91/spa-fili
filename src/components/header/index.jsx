'use client'
import HeaderSm from '@/components/header/headerSm'
import { useDeviceSizes } from '@/ui/hoc/consts-breakpoints'

const Header = () => {
	const { isSmallDesktop, isLargeDesktop } = useDeviceSizes()
	return (
		<>
			<div className='flex items-center justify-center  py-16'>
				{isSmallDesktop || isLargeDesktop ? (
					<header className='flex justify-center items-center text-lg pt-5 space-x-28'>
						<div>
							<img src='spa.png' alt='spa fili' width={60} />
						</div>
						<ul className='flex gap-24'>
							<li>Главная</li>
							<li>О нас</li>
							<li>Отзывы</li>
							<li>Контакты</li>
						</ul>
						<button className='bg-sky-600 px-8 py-2 rounded'>
							Записаться на сеанс
						</button>
					</header>
				) : (
					<HeaderSm />
				)}
			</div>
		</>
	)
}

export default Header
