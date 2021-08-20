const BASE_URL = `http://localhost:3004`;

const api = {
  movies: {
    getMovies: () =>
      fetch(`${BASE_URL}/movies`).then((response) => {
        return response.json();
      }),
  },
  genres: {
    getGenres: () =>
      fetch(`${BASE_URL}/genres`).then((response) => {
        return response.json();
      }),
  },
};

export default api;
