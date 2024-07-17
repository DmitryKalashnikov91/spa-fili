'use client'
import { useRouter } from 'next/navigation'
import { IoMdArrowRoundBack } from 'react-icons/io'

const GoBack = () => {
	const router = useRouter()
	return (
		<button
			onClick={() => router.back()}
			className='flex gap-2 bg-sky-600 text-2xl px-6 py-2 rounded hover:bg-sky-400'
		>
			<IoMdArrowRoundBack /> Назад
		</button>
	)
}

export default GoBack
