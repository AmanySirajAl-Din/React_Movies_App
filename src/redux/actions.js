export const showMovieDetails = (movie_id) => {
    return {
        type: "show_MovieDetails",
        payload: movie_id,
    };
};
