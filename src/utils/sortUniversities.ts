import { TUniversity } from '../models/universityModel';

function byName(universities: TUniversity[]) {
	return [...universities].sort((a, b) => a.name.localeCompare(b.name));
}

function byRating(universities: TUniversity[]) {
	return [...universities].sort((a, b) => a.rating - b.rating);
}

//since some universities do not require UNT, their values for that are null. due to that, the universities list is divided into 2 parts: with and without unt scores. universities with unt scores will be sorted, while universities without unt score will be place at the bottom of the sorted list
function byUntScore(universities: TUniversity[]) {
	const universitiesWithUntScore = universities.filter(
		university => university.unt_score !== null
	);
	universitiesWithUntScore.sort((a, b) => a.unt_score! - b.unt_score!);
	const universitiesWithoutUntScore = universities.filter(
		university => university.unt_score === null
	);
	return [...universitiesWithUntScore, ...universitiesWithoutUntScore];
}

function sort(sortBy: string, universities: TUniversity[]) {
	let sortedUniversities: TUniversity[] = [];
	switch (sortBy) {
		case 'name':
			sortedUniversities = byName(universities);
			break;
		case 'rating':
			sortedUniversities = byRating(universities);
			break;
		case 'unt':
			sortedUniversities = byUntScore(universities);
			break;
		default:
			sortedUniversities = universities;
	}

	return sortedUniversities;
}

export { byName, byRating, byUntScore, sort };
