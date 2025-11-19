'use client'
import Image from 'next/image'
import SubTitle from '../title/subTitle'
import styles from './Specialists.module.scss'
import { SpecJSON } from './SpecJson'

const Specialists = () => {
	return (
		<>
			<div className={styles.Specialists}>
				<SubTitle color={'#018ABE'} content={'Специалисты'} />
				{SpecJSON.map(spec => (
					<div className={styles.Specialists_wrapper} key={spec.id}>
						<Image src={spec.urlImg} alt={spec.name} />
						<div className={styles.Specialists_wrapper__content}>
							<h4 className='text-center text-3xl tracking-widest'>
								{spec.name}
							</h4>
							<p className='tracking-wide'>{spec.content}</p>
						</div>
					</div>
				))}
			</div>
		</>
	)
}

export default Specialists
