import { ClientDraft } from "./clientStore.types";
import { Actions } from "./clientStore.actions";

const reducer = (draft: ClientDraft, action: Actions) => {
  switch (action.type) {
    case "ADD_FAVORITE_MOVIE": {
      draft.moviesLiked = [...draft.moviesLiked, action.movieId];
      return;
    }

    case "ADD_DOTTED_MOVIE": {
      const { movieId } = action.payload;
      draft.dottedMovies[movieId] = [
        ...(draft.dottedMovies[movieId] || []),
        action.payload,
      ];
      return;
    }

    default:
      throw new Error("Invalid action type");
  }
};

export default reducer;
