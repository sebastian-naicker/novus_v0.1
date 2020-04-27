import React from 'react'
import Logo from '@svgs/logo-2.svg'
import { withStore } from '@hocs/enhanced-components'

const Home = () => {
	return (
		<div className='panel'>
			<div className='logo-wrapper'>
				<Logo />
			</div>
		</div>
	);
}

export default withStore(Home)
