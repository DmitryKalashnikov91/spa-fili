import { useMediaQuery } from './useResize'

export const useDeviceSizes = () => {
	const isSmallMobile = useMediaQuery('(max-width: 359px)')
	const isMobile = useMediaQuery('(min-width: 360px) and (max-width: 539px)')
	const isSurfaceDuo = useMediaQuery(
		'(min-width: 540px) and (max-width: 719px)'
	)
	const isTablet = useMediaQuery('(min-width: 720px) and (max-width: 1023px)')
	const isSmallDesktop = useMediaQuery(
		'(min-width: 1024px) and (max-width: 1439px)'
	)
	const isLargeDesktop = useMediaQuery('(min-width: 1440px)')
	return {
		isSmallMobile,
		isMobile,
		isSurfaceDuo,
		isTablet,
		isSmallDesktop,
		isLargeDesktop,
	}
}
