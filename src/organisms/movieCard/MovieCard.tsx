import { useNavigate } from 'react-router-dom';
import styles from './movieCard.module.scss';
import { MovieCardProps } from './movieCard.types';

const MovieCard = ({ Poster, imdbID }: MovieCardProps) => {
	const navigate = useNavigate();

	if (Poster === 'N/A') {
		return null;
	}

	return (
		<div
			className={styles.card}
			onClick={() => navigate(`/detail/${imdbID}`)}
			id="movieCard"
		>
			<img
				src={Poster}
				alt='movie image'
				className={styles.card__image}
				loading='lazy'
			/>
		</div>
	);
};

export default MovieCard;