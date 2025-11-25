'use client'
import HeaderSm from '@/components/header/headerSm'
import { useDeviceSizes } from '@/ui/hoc/consts-breakpoints'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FaTelegramPlane, FaWhatsapp } from 'react-icons/fa'
import { FiPhone } from 'react-icons/fi'

const Header = () => {
	const router = useRouter()
	const { isSmallDesktop, isLargeDesktop } = useDeviceSizes()
	return (
		<>
			<div className='flex items-center justify-center  py-16'>
				{isSmallDesktop || isLargeDesktop ? (
					<header className='flex justify-center items-center text-lg pt-5 space-x-28'>
						<Link href='/'>
							<Image
								className='rounded-md'
								src='/logo2.webp'
								alt='spa fili'
								width={80}
								loading='lazy'
								height={80}
							/>
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
			<div className='flex  mb-10 -mt-8 justify-evenly md:justify-end md:mr-72 md:gap-32 text-4xl'>
				<Link
					className='hover:scale-150'
					href={'https://wa.me/79689893388'}
					target='_blank'
				>
					<FaWhatsapp />
				</Link>
				<Link
					className='hover:scale-150'
					href={'https://t.me/spaAlex'}
					target='_blank'
				>
					<FaTelegramPlane />
				</Link>
				<Link
					className='hover:scale-150'
					href={'tel:+79689893388'}
					target='_blank'
				>
					<FiPhone />
				</Link>
			</div>
		</>
	)
}

export default Header
