import axios, { AxiosError } from 'axios';
import { TUniversity } from '../models/universityModel';

export async function getUniversities(): Promise<TUniversity[]> {
	try {
		const res = await axios.get(
			'https://getprof-server.vercel.app/api/universities'
		);
		return res.data;
	} catch (err: unknown) {
		if (err instanceof AxiosError && err.response)
			throw new Error(err.response.data.error);
		throw new Error('an unknown error has been occured');
	}
}

export async function getUniversity(id: string): Promise<TUniversity> {
	try {
		const res = await axios.get(
			`https://getprof-server.vercel.app/api/universities/${id}`
		);
		return res.data[0];
	} catch (err: unknown) {
		if (err instanceof AxiosError && err.response)
			throw new Error(err.response.data.error);
		throw new Error('an unknown error has been occured');
	}
}
