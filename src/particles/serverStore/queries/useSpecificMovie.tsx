import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getMoiveById } from 'particles/requests';
import { MovieDetail } from 'types/movie.types';

const useSpecificMovie = () => {
	const { id } = useParams<{ id: string }>();
	return useQuery<MovieDetail>(['movie', id], () => getMoiveById(id!), {
		staleTime: Infinity,
	});
}

export default useSpecificMovie;