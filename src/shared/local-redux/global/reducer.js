import { reducerFactory } from 'factories';
import * as actions from './actions';

const initialState = {
	title: '',
};

/* eslint-disable */
const global = reducerFactory(initialState, actions);
export default global;
