import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LayoutBase } from 'layouts';
import { routes } from '../tree';

const Switches = React.memo(() => {
	return (
		<Switch>
			{Object.keys(routes).map((key) => {
				const { page: Page, ...route } = routes[key];

				return (
					<Route
						key={route.path}
						{...route}
						render={(matchProps) => (
							<LayoutBase>
								<Page {...matchProps} />
							</LayoutBase>
						)}
					/>
				)
			})}
			<Redirect to='/' />
		</Switch>
	);
});

export { Switches };
