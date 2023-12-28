import React, { useEffect, useState } from 'react';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const API_KEY = "api_key=2396da8117cda1bcdd20fa75f49591f6";
  const BASE_URL ="https://api.themoviedb.org/3";
  const API_URL = BASE_URL + '/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&' + API_KEY;
  const image_url = 'https://image.tmdb.org/t/p/w500/';

  useEffect(() => {
    getMovies(API_URL);
  }, []);

  function getMovies(url) {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setMovies(data.results);
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
  }

  function getColor(vote) {
    if (vote >= 8) {
      return 'green';
    } else if (vote >= 5) {
      return 'orange';
    } else {
      return 'red';
    }
  }

  return (
    <>
      <main id="main">
        {movies.map(movie => (
          <div key={movie.id} className="movie">
            <img src={`${image_url}${movie.poster_path}`} alt={movie.title} />
            <div className="movie-info">
              <h2>{movie.title}</h2>
              <span className={getColor(movie.vote_average)}>{movie.vote_average}</span>
            </div>
            <div className="overview">
              <h1>Overview</h1>
              {movie.overview}
            </div>
          </div>
        ))}
      </main>
    </>
  );
};

export default Movies;
