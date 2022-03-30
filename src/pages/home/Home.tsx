import { useState } from 'react';
import styles from './home.module.scss';
import { Spinner } from '../../atoms';
import { Navbar, Input, EmptyState } from '../../molecules';
import { MovieCard } from '../../organisms';
import { useMovies } from '../../particles/serverStore/queries';
import { ResponseEnum } from '../../types/movie.types';

const Home = () => {
	const [search, setSearch] = useState('');
	const { data, isLoading, isSuccess } = useMovies(search);

	return (
		<main className={styles.home}>
			<Navbar />
			<section className={styles.home__input_section}>
				<Input
					placeholder='Search movies'
					onChange={(e) => setSearch(e.target.value)}
					id='input'
				/>
			</section>

			<section className={styles.home__main_section}>
				{!isSuccess && (search.length > 0 || isLoading) && (
					<Spinner />
				)}
				{search.length === 0 && !Boolean(data?.Search?.length) && (
					<EmptyState />
				)}
				{data && data.Response === ResponseEnum.True && (
					<div className={styles.home__main_section__movies}>
						{data.Search.map((movie) => (
							<MovieCard key={movie.imdbID} {...movie} />
						))}
					</div>
				)}
			</section>

		</main>
	)
};

export default Home;