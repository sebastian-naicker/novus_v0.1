import { memo } from 'react'
import isequal from 'lodash.isequal'

const comparision = (prev, next) => isequal(prev, next)

export default (component) => memo(component, comparision)
