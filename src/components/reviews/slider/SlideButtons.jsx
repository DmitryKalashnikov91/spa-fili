import { useSwiper } from 'swiper/react'

const SlideButtons = () => {
	const swiper = useSwiper()
	return (
		<div className='border-2 bg-gray-200 border-gray-200 w-fit px-2 py-1 rounded-xl mt-4 space-x-4'>
			<button className='bg-black' onClick={() => swiper.slidePrev()}>
				{'<'}prev
			</button>
			<button className='bg-black' onClick={() => swiper.slideNext()}>
				{'>'}next
			</button>
		</div>
	)
}

export default SlideButtons
