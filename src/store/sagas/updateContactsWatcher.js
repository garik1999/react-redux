import { takeEvery, put, call } from "redux-saga/effects";
import { USER_CONTACTS_UPDATE } from "../app/types";
import { requestContactsSuccess, requestContactsFailure } from "../contacts/actions";

export function* updateContactsWatcher() {
	yield takeEvery(USER_CONTACTS_UPDATE, updateContactsWorker);
}

function* updateContactsWorker({ seed, size }) {
	try {
		const payload = yield call(fetchUpdatedContacts, { seed, size });
		yield put(requestContactsSuccess(payload));
	} catch (e) {
		yield put(requestContactsFailure(e));
	}
}

const fetchUpdatedContacts = ({ seed, size }) => {
	return fetch(
		`https://randomuser.me/api/1.3?seed=${seed}&results=${size}`
	).then((response) => response.json());
};
