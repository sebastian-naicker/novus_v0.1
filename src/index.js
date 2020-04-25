import React from 'react';
import { render } from 'react-dom';
import AppProvider from '@store'
import init from './app/setup';

init(); // run app setup
render(<AppProvider />, document.getElementById('app'));

