import { Spinner, Text } from 'atoms';
import { Navbar } from 'molecules';
import { useSpecificMovie } from 'particles/serverStore/queries';
import styles from './movieDetail.module.scss';
import IMDBIcon from 'assets/imdbIcon.png';
import useActors from 'hooks/useActors';
import useWriters from 'hooks/useWriters';
import useGenres from 'hooks/useGenres';
import { Footer } from './subComponents';
import { useStore } from 'particles/clientStore';

const MovieDetail = () => {
	const { data, isLoading, isError } = useSpecificMovie();
	const { dottedMovies } = useStore();

	const actors = useActors(data?.Actors);
	const writers = useWriters(data?.Writer);
	const genres = useGenres(data?.Genre);

	if (isLoading || isError) {
		return (
			<div className={styles.detail}>
				<Navbar />
				<div className={styles.detail__loading}>
					<Spinner />
				</div>
			</div>
		)
	}

	return (
		<div className={styles.detail}>
			<Navbar />

			<div className={styles.detail__content}>
				<img
					src={data?.Poster}
					alt='movie image'
					className={styles.detail__content__image}
					loading='lazy'
					id='movieImage'
				/>
				<section className={styles.detail__content__details}>
					<Text variant='titleBig'>{data?.Title}</Text>
					<Text
						variant='bodySmall'
						color='secondary'
						className={styles.detail__content__details__runtime}
					>
						{`${data?.Runtime} - ${data?.Year}`}
					</Text>

					<div className={styles.detail__content__details__imdb}>
						<img
							src={IMDBIcon}
							alt='imdb icon'
							className={styles.detail__content__details__imdb__icon}
						/>
						<Text
							className={styles.detail__content__details__imdb__rating_container}
							variant='body'
						>
							<Text className={styles.detail__content__details__imdb__rating} variant='subtitle'>{data?.imdbRating}</Text>
							/10
						</Text>
					</div>

					<div className={styles.detail__content__details__overview}>
						<Text
							variant='bodyBig'
							color='secondary'
							className={styles.detail__content__details__overview__title}
						>
							Overview
						</Text>
						<Text variant='body'>{data?.Plot}</Text>
					</div>

					<section className={styles.detail__content__details__list}>
						{actors.length > 0 && (
							<div className={styles.detail__content__details__itemList}>
								<Text
									variant='bodyBig'
									color='secondary'
								>
									Cast
								</Text>

								{actors.map((a) => (
									<Text key={a}>{a}</Text>
								))}
							</div>
						)}
						{genres.length > 0 && (
							<div className={styles.detail__content__details__itemList}>
								<Text
									variant='bodyBig'
									color='secondary'
								>
									Genre
								</Text>

								{genres.map((g) => (
									<Text key={g}>{g}</Text>
								))}
							</div>
						)}
						<div className={styles.detail__content__details__itemList}>
							<Text
								variant='bodyBig'
								color='secondary'
							>
								Director
							</Text>
							<Text>{data?.Director}</Text>
						</div>
						{writers.length > 0 && (
							<div className={styles.detail__content__details__itemList}>
								<Text
									variant='bodyBig'
									color='secondary'
								>
									Writers
								</Text>

								{writers.map((w) => (
									<Text key={w}>{w}</Text>
								))}
							</div>
						)}
					</section>

				</section>
			</div>

			<Footer movieId={data?.imdbID!} />

			<section className={styles.detail__comments_section}>
				{dottedMovies?.[data?.imdbID!]?.length > 0 && dottedMovies[data?.imdbID!].map((c) => (
					<div className={styles.detail__comments_section__coment} key={c.movieId + c.date}>
						<Text
							variant='bodyBig'
							color='secondary'
							className={styles.detail__comments_section__coment__title}
						>
							{c.name}
						</Text>
						<Text>
							{c.message}
						</Text>
					</div>
				))}
			</section>

		</div>
	)
};

export default MovieDetail;