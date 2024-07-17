'use client'
import HeaderSm from '@/components/header/headerSm'
import { useDeviceSizes } from '@/ui/hoc/consts-breakpoints'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Header = () => {
	const router = useRouter()
	const { isSmallDesktop, isLargeDesktop } = useDeviceSizes()
	return (
		<>
			<div className='flex items-center justify-center  py-16'>
				{isSmallDesktop || isLargeDesktop ? (
					<header className='flex justify-center items-center text-lg pt-5 space-x-28'>
						<Link href='/'>
							<img src='/spa.png' alt='spa fili' width={80} />
						</Link>
						<ul className='flex gap-24 caret-transparent '>
							<li>
								<Link href='/'>Главная</Link>
							</li>
							<li
								className='cursor-pointer'
								onClick={() => router.push('/#seances')}
							>
								О нас
							</li>
							<li
								className='cursor-pointer'
								onClick={() => router.push('/#reviews')}
							>
								Отзывы
							</li>
							<li
								className='cursor-pointer'
								onClick={() => router.push('/#contacts')}
							>
								Контакты
							</li>
						</ul>
						<button className='bg-sky-600 text-2xl px-8 py-2 rounded hover:bg-sky-400 '>
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
