import { NATIONALITIES } from "../constants/nationalities";
import { GENDER } from "../constants/gender";

export const sumStatistic = (data) => {
	let countNat = {};
	let countGender = {};

	for (let key in NATIONALITIES) {
		countNat[key] = 0;
	}

	for (let key in GENDER) {
		countGender[key] = 0;
	}

	data.forEach((contact) => {
		countNat[contact.nat]++;
		countGender[contact.gender]++;
	});

	return { ...countNat, ...countGender, ...{ total: data.length } };
};
