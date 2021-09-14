import React from 'react';
import ReactDOM from 'react-dom';
import { Provider  } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Root } from 'components';
import { history } from 'routes/history';
import { store } from 'store';

const root = document.getElementById('root');

const render = (Component, root, done = () => {}) => {
	ReactDOM.render(
		<Provider store={store}>
			<ConnectedRouter history={history}>
				<Component />
			</ConnectedRouter>
		</Provider>,
		root,
		done,
	);
};

render(Root, root);
