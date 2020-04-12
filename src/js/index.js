import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom'
import configureStore from './configureStore'
import AsyncApp from './containers/AsyncApp'

const store = configureStore();

render(
	<Router>
		<Provider store={store}>
			<AsyncApp />
		</Provider>
	</Router>, 
	document.getElementById("app")
);