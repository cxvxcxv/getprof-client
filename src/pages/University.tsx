import { useParams } from 'react-router-dom';

const University = () => {
	const params = useParams();

	return <div>{params.id}</div>;
};

export default University;
