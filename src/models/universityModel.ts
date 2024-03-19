export type TUniversity = {
	id: number;
	name: string;
	city: string;
	university_location: string;
	rating: number;
	professions: string[] | null;
	languages: string[];
	practice: boolean;
	direction: string;
	schedule: boolean;
	unt_score: number | null;
	education_cost: number;
	education_duration: string;
	study_exchange: boolean;
	dormitory_location: string;
	dormitory_prices: number;
	dormitory_conditions: number;
	accomodation_prices: number;
	students_attitude: string;
	teachers_attitude: string;
	website: string;
};

export type TLoad = {
	isLoading: boolean;
	isLoadError: boolean;
};
