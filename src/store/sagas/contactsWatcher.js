import { takeEvery, put, call } from "redux-saga/effects";
import { USER_CONTACTS_REQUEST } from "../app/types";
import { requestContactsSuccess, requestContactsFailure } from "../contacts/actions";

export function* contactsWatcher() {
	yield takeEvery(USER_CONTACTS_REQUEST, contactsWorker);
}

function* contactsWorker({ size }) {
	try {
		const payload = yield call(fetchContacts, size);
		yield put(requestContactsSuccess(payload));
	} catch (e) {
		yield put(requestContactsFailure(e));
	}
}

const fetchContacts = (size) => {
	return fetch(
		`https://randomuser.me/api/1.3?results=${size}`
	).then((response) => response.json());
};
