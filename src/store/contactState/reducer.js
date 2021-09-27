import {
	UPDATE_FORM_STATE,
	UPDATE_TABLE_STATE,
	DELETE_PAGE_STATE,
	UPDATE_LIST_STATE,
} from "../app/types";

const initialState = {
	fullName: "",
	gender: undefined,
	nat: undefined,
	creator: false,
	currentTable: 1,
	pageSizeTable: 10,
	currentList: 1,
	pageSizeList: 6,
};

export function contactState(state = initialState, action) {
	switch (action.type) {
		case UPDATE_FORM_STATE:
			const {fullName, gender, nat, creator} = action;

			return {
				...state,
				fullName,
				gender,
				nat,
				creator,
			};
		case UPDATE_TABLE_STATE:
			const {currentTable, pageSizeTable} = action

			return {
				...state,
				currentTable,
				pageSizeTable,
			};
		case UPDATE_LIST_STATE:
			const {currentList, pageSizeList} = action

			return {
				...state,
				currentList,
				pageSizeList,
			};
		case DELETE_PAGE_STATE:
			return {
				...state,
				fullName: "",
				gender: undefined,
				nat: undefined,
				creator: false,
				currentTable: 1,
				currentList: 1,
			};
		default:
			return state;
	}
}
