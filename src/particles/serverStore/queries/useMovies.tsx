import { useQuery } from 'react-query';
import { getMoviesForTitle } from '../../requests';
import { PaginatedMovies } from '../../../types/movie.types';
import useDebounce from '../../../hooks/useDebounce';

const useMovies = (title: string) => {
	const value = useDebounce(title, 800);
	return useQuery<PaginatedMovies>(['movies', value], () => getMoviesForTitle(value), {
		enabled: value.length > 0,
	});
};

export default useMovies;