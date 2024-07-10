'use client'
import HeaderSm from '@/components/header/headerSm'
import { useDeviceSizes } from '@/ui/hoc/consts-breakpoints'
import Link from 'next/link'

const Header = () => {
	const { isSmallDesktop, isLargeDesktop } = useDeviceSizes()
	return (
		<>
			<div className='flex items-center justify-center  py-16'>
				{isSmallDesktop || isLargeDesktop ? (
					<header className='flex justify-center items-center text-lg pt-5 space-x-28'>
						<Link href='/'>
							<img src='spa.png' alt='spa fili' width={80} />
						</Link>
						<ul className='flex gap-24'>
							<li>
								<Link href='/'>Главная</Link>
							</li>
							<li>
								<Link href='#seances'>О нас</Link>
							</li>
							<li>
								<Link href='#reviews'>Отзывы</Link>
							</li>
							<li>
								<Link href='#contacts'>Контакты</Link>
							</li>
						</ul>
						<button className='bg-sky-600 px-8 py-2 rounded hover:bg-sky-400 '>
							<Link href='https://dikidi.net/g367474?p=0.sp' target='_blank'>
								Записаться на сеанс
							</Link>
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
