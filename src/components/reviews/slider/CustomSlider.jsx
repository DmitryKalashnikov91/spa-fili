'use client'
import { A11y, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import { revData } from '../revews'

const CustomSlider = () => {
	return (
		<>
			<Swiper
				modules={[Navigation, Pagination, A11y]}
				slidesPerView={1}
				spaceBetween={10}
			>
				{revData.map(rev => (
					<SwiperSlide
						key={rev.id}
						className='bg-sky-600 flex justify-center items-center rounded-xl px-14'
					>
						<div className='p-4'>
							<h4>{rev.name}</h4>
							<p className='text-base'>{rev.content}</p>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	)
}

export default CustomSlider
