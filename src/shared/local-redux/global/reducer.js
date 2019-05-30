import { reducerFactory } from 'factories';
import * as actions from './actions';

const initialState = {
	title: 'Home',
};

/* eslint-disable */
const global = reducerFactory(initialState, actions);
export default global;
