import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from 'local-redux';
import App from './app';
import init from './app/setup';

const store = createStore(reducers, compose(applyMiddleware(thunk), devToolsEnhancer()));
init(); // run app setup

render(<Provider store={store}><App /></Provider>, document.getElementById('app'));
