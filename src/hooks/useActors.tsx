const useActors = (actors: string | undefined) => {
	if (!actors) {
		return [];
	}
	return actors.split(',');
};

export default useActors;