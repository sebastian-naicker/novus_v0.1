import React from 'react'
import i18n from '@i18n'
import cc from '@utils/styles'
import PotionIcon from '@svgs/potion.svg'
import LightingIcon from '@svgs/lightening.svg'

const Footer = () => (
	<footer className={cc('footer')}>
		<p className={cc('footer-content')}>
			{i18n.madeWithLove}{' '}
			<span className={cc('icon')}>
				<PotionIcon />
			</span>
			{i18n.by}{' '}
			<span className={cc('icon')}>
				<LightingIcon />
			</span>
			{i18n.year}
		</p>
	</footer>
)

export default Footer
