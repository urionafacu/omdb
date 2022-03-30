export type Actions =
  | { type: "ADD_FAVORITE_MOVIE"; movieId: string }
  | {
      type: "ADD_DOTTED_MOVIE";
      payload: {
        movieId: string;
        rate: number;
        date: string;
        name: string;
        message: string;
      };
    };
