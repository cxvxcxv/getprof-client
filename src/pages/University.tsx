import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getUniversity } from '../api/fetch';
import { TLoad, TUniversity } from '../models/universityModel';
import styles from '../styles/University.module.css';

const University = () => {
	const params = useParams();
	const [university, setUniversity] = useState<TUniversity>();
	const [load, setLoad] = useState<TLoad>({
		isLoading: true,
		isLoadError: false,
	});

	useEffect(() => {
		const fetchData = async () => {
			if (!params.id) return [];
			try {
				const fetchedUniversity = await getUniversity(params.id);
				setUniversity(fetchedUniversity);
				setLoad({
					isLoadError: false,
					isLoading: false,
				});
			} catch (error) {
				console.error(error);
				setLoad({
					isLoadError: true,
					isLoading: false,
				});
			}
		};
		fetchData();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<section className={styles.university}>
			{load.isLoadError && !load.isLoading && (
				<p>Failed to load resources, try again later</p>
			)}
			{!load.isLoadError && load.isLoading && <p>Loading...</p>}
			{university && (
				<div>
					<h1>{university.name}</h1>
					<hr />
					<h2>Main information</h2>
					<p>city: {university.city}</p>
					<p>location: {university.university_location}</p>
					<p>rating: #{university.rating}</p>
					<p>students' attitude: {university.students_attitude}</p>
					<p>teachers' attitude: {university.teachers_attitude}</p>
					<p>UNT score required: {university.unt_score}</p>
					<p>
						website:{' '}
						<Link to={university.website} target='blank'>
							{university.website}
						</Link>
					</p>
					<hr />
					<h2>Education</h2>
					<p>languages: {[...university.languages].join(', ')}</p>
					<p>direction: {university.direction}</p>
					<p>practice provided: {university.practice + ''}</p>
					<p>opportunity to create schedule: {university.schedule + ''}</p>
					<p>
						opportunity to study exchange abroad:{' '}
						{university.study_exchange + ''}
					</p>
					<p>duration: {university.education_duration}</p>
					<p>cost: {university.education_cost}&#8376;</p>
					<hr />
					<h2>Accomodation</h2>
					<p>dormitory location: {university.dormitory_location}</p>
					<p>
						dormitory prices (avg, per month): {university.dormitory_prices}
						&#8376;
					</p>
					<p>
						dormitory conditions (1-6):{' '}
						{university.dormitory_conditions || 'unknown'}
					</p>
					<p>
						accomodation prices near the university:{' '}
						{university.accomodation_prices}
					</p>
					<Link to='../filter'>back</Link>
				</div>
			)}
		</section>
	);
};

export default University;
