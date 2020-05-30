import React, { useState } from 'react'
import cc from '@utils/styles'
import { v4 } from 'uuid'

const ToggleSwitch = ({ label, handleToggleOn, handleToggleOff }) => {
	const [checked, setChecked] = useState(false)
	const [id] = useState(v4())

	const handleChange = ({ currentTarget }) => {
		const currentChecked = currentTarget.checked
		setChecked(currentChecked)
		if (currentChecked) {
			handleToggleOn()
		} else {
			handleToggleOff()
		}
	}

	return (
		<div className={cc('toggle-switch')}>
			<span className={cc('toggle-switch__label')}>{label}</span>
			<input id={id} type='checkbox' data-checked={checked} onChange={handleChange} />
			<label htmlFor={id} className={cc('toggle-switch__handle')} />
		</div>
	)
}

export default ToggleSwitch
