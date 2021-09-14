import { createReducer } from '../utils';

export const initialState = {};

export const reducer = createReducer(initialState, {
	'@@router/LOCATION_CHANGE'(state) {
		return state;
	},
});
