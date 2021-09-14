import React from 'react';
import { RoutesSwitch } from 'routes';
import 'antd/dist/antd.css';
import 'assets/styles/index.scss';

const Root = React.memo(() => {
	return (
		<RoutesSwitch />
	);
});

export { Root };
