import { Arrow } from '../../ui/Arrow'

const SubTitle = ({ color, content }) => {
	const left = 'M0 0H17C26.3888 0 34 7.61116 34 17H17C7.61116 17 0 9.38884 0 0Z'
	const right =
		'M34 0H17C7.61116 0 0 7.61116 0 17H17C26.3888 17 34 9.38884 34 0Z'
	return (
		<div className='flex md:gap-12 gap-4 content-center justify-center'>
			<Arrow color={color} path={left} />
			<h2>{content}</h2>
			<Arrow color={color} path={right} />
		</div>
	)
}

export default SubTitle
