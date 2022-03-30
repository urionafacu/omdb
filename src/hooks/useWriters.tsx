const useWriters = (writers: string | undefined) => {
	if (!writers) {
		return [];
	}
	return writers.split(',');
};

export default useWriters;