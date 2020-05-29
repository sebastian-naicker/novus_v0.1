import React, { useState, useEffect } from 'react'
import Proptypes from 'prop-types'
import StopIcon from '@svgs/stop@40.svg'
import VerifyIcon from '@svgs/verify.svg'
import cc from '@utils/styles'

const StatusBar = ({ statusType, message, isVisible, autoHide }) => {
	const [showStatusBar, setShowStatusBar] = useState(isVisible)

	useEffect(() => {
		setTimeout(() => {
			if (autoHide) setShowStatusBar(false)
		}, 3500)
	}, [autoHide])

	useEffect(() => {
		setShowStatusBar(isVisible)
	}, [isVisible])

	return (
		<div
			className={cc('status-bar', {
				[cc(`status-bar--${statusType}`)]: true,
				[cc('status-bar--visible')]: showStatusBar,
				[cc('status-bar--not-visible')]: !showStatusBar
			})}
		>
			<div className={cc('status-bar__icon')}>
				{statusType === 'error' && <StopIcon />}
				{statusType === 'success' && <VerifyIcon />}
			</div>
			<p>{message}</p>
		</div>
	)
}

StatusBar.defaultProps = {
	isVisible: false,
	autoHide: false
}

StatusBar.propTypes = {
	statusType: Proptypes.oneOf(['success', 'warning', 'error']).isRequired,
	message: Proptypes.string.isRequired,
	isVisible: Proptypes.bool,
	autoHide: Proptypes.bool
}

export default StatusBar
