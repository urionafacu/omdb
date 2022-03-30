const useGenres = (genres: string | undefined) => {
	if (!genres) {
		return [];
	}
	return genres.split(',');
};

export default useGenres;