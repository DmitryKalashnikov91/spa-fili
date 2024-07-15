'use client'
import { A11y, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import { revData } from '../revews'
import Stars from './Stars'

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
						className='bg-sky-600 flex justify-center items-center rounded-xl px-8'
					>
						<div className='text-justify'>
							<h4 className='pb-4'>{rev.name}</h4>
							<Stars />
							<p className='text-base pb-4'>{rev.content}</p>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	)
}

export default CustomSlider
