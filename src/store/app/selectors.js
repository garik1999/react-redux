import { createSelector } from 'reselect';

const _getAppState = (state) => state;

export const getAppState = createSelector(
	[_getAppState],
	(app) => app,
);
