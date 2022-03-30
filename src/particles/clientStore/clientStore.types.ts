type DottedMovies = {
  movieId: string;
  rate: number;
  date: string;
  name: string;
  message: string;
};

export type ClientDraft = {
  dottedMovies: {
    [movieId: string]: DottedMovies[];
  };
  moviesLiked: string[];
};
