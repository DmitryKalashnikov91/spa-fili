import Header from '@/components/header'
import { El_Messiri } from 'next/font/google'
import './globals.css'

const elMessiri = El_Messiri({ subsets: ['latin'] })

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={elMessiri.className}>
				<Header />
				{children}
				<footer className='text-center text-lg text-cyan-600'>
					2024
					<p>Spa Fili</p>
				</footer>
			</body>
		</html>
	)
}