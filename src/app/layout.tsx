import Header from '@/components/header'
import { El_Messiri } from 'next/font/google'
import Script from 'next/script'
import { Suspense } from 'react'
import YandexMetrika from './YandexMetrika'

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
				<Script id='metrika-counter' strategy='afterInteractive'>
					{`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
    m[i].l=1*new Date();
    for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
    k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
    (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
 
    ym(98043134, "init", {
          defer: true,
          clickmap:true,
          trackLinks:true,
          accurateTrackBounce:true,
          webvisor:true
    });`}
				</Script>
				<Header />

				{children}
				<footer className='text-center text-lg text-cyan-600 mt-60'>
					2024
					<p>Спа Фили</p>
				</footer>
				<Suspense fallback={<></>}>
					<YandexMetrika />
				</Suspense>
			</body>
		</html>
	)
}
