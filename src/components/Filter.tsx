/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import { TUniversity } from '../models/universityModel';
import styles from '../styles/Filter.module.css';
import * as sortUniversities from '../utils/sortUniversities';

type TFilterProps = {
	universities: TUniversity[];
	setUniversities: (universities: TUniversity[]) => void;
	allUniversities: TUniversity[];
};

//? how to optimize the search system? so that i would not pass unnecessary props like allUniversities?

const Filter: React.FC<TFilterProps> = ({
	universities,
	setUniversities,
	allUniversities,
}) => {
	const [sortBy, setSortBy] = useState<string>('');
	const [searchInput, setSearchInput] = useState<string>('');

	useEffect(() => {
		const filteredUniversities = allUniversities.filter(university => {
			const searchValue = searchInput.toLowerCase().trim();
			const universityName = university.name.toLowerCase();
			const professions = university.professions || [];

			const nameMatch = universityName.includes(searchValue);
			const professionMatch = professions.some(profession =>
				profession.toLowerCase().includes(searchValue)
			);

			return nameMatch || professionMatch;
		});

		const sortedUniversities = sortUniversities.sort(
			sortBy,
			filteredUniversities
		);

		setUniversities(sortedUniversities);
	}, [searchInput, setUniversities, sortBy]);

	return (
		<section className={styles.filter}>
			<input
				onChange={e => setSearchInput(e.target.value)}
				placeholder='univeristy name / profession'
				id='search'
				autoComplete='off'
			/>
			<div className={styles.functions}>
				<select
					name='sort'
					className={styles.sort}
					value={sortBy}
					onChange={event => setSortBy(event.target.value)}
				>
					<option value='' disabled>
						Sort By
					</option>
					<option value='name'>Name</option>
					<option value='rating'>Rating</option>
					<option value='unt'>UNT score</option>
				</select>
				<button
					onClick={() => setUniversities([...universities].reverse())}
					disabled={!sortBy}
				>
					Reverse
				</button>
			</div>
		</section>
	);
};

export default Filter;
