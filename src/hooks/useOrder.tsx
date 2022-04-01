import { MovieDetail, Movie, PaginatedMovies } from 'types/movie.types';
import { getMoiveById } from 'particles/requests';


const getAllMovies = async (movies: PaginatedMovies) => {
	const promises = movies.Search.map(m => getMoiveById(m.imdbID))
	return await Promise.all(promises);
};

const parseString = (numberString: string) => {
	return parseFloat(numberString.split('/')[0]);
}

const orderMovies = async (movies: PaginatedMovies | undefined) => {
	if (!movies) {
		return [];
	}

	const response = await getAllMovies(movies);

	const moviesObject: Record<number, Movie[]> = {};

	for (let i = 0; i < response.length; i++) {
		const key = parseString(response[i].Ratings[0].Value);
		if (Array.isArray(moviesObject[response[i].Ratings[0].Value])) {
			moviesObject[key].push(response[i]);
		} else {
			moviesObject[key] = [response[i]];
		}
	}

	// to do return ordered array
	// average ratings for movie

};

export default orderMovies;