import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUniversities } from '../api/fetch';
import Filter from '../components/Filter';
import { TUniversity } from '../models/universityModel';
import styles from '../styles/Universities.module.css';

const Universities: FC = () => {
	const [universities, setUniversities] = useState<TUniversity[]>([]);
	const [allUniversities, setAllUniversities] = useState<TUniversity[]>([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const fetchedUniversities = await getUniversities();
				setUniversities(fetchedUniversities);
				setAllUniversities(fetchedUniversities);
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, []);

	return (
		<section className={styles.universities}>
			<Filter
				setUniversities={setUniversities}
				universities={universities}
				allUniversities={allUniversities}
			/>
			{universities.length > 0 ? (
				<div className={styles.list}>
					{universities.map(university => (
						<Link
							to={`/${university.id}`}
							key={university.id}
							className={styles.university}
						>
							{university.rating}. {university.name} {university.unt_score}
						</Link>
					))}
				</div>
			) : (
				<p>The list is empty</p>
			)}
		</section>
	);
};

export default Universities;
