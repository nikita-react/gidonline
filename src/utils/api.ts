const BASE_URL: string = `http://localhost:3004`;

const api: { movies: any; genres: any } = {
  movies: {
    getMovies: (): Promise<any> =>
      fetch(`${BASE_URL}/movies`).then((response) => {
        return response.json();
      }),
  },
  genres: {
    getGenres: (): Promise<any> =>
      fetch(`${BASE_URL}/genres`).then((response) => {
        return response.json();
      }),
  },
};

export default api;
