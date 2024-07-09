import Main from '@/components/main/Main'
import Prices from '@/components/prices/Prices'
import Reviews from '@/components/reviews/Reviews'
import Seances from '@/components/seances/Seances'
import Specialists from '@/components/specialists/Specialists'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Spa Fili',
	description: 'Массажный салон Spa Fili',
}
export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between text-3xl'>
			<Main />
			<Seances />
			<Reviews />
			<Prices />
			<Specialists />
			{/* <Contacts /> */}
		</main>
	)
}
