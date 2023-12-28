import React, { useEffect, useState } from 'react'
const API_KEY = "api_key=2396da8117cda1bcdd20fa75f49591f6";
const BASE_URL ="https://api.themoviedb.org/3";
const API_URL = BASE_URL + '/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&' + API_KEY
const image_url = 'https://image.tmdb.org/t/p/w500/'
const main = document.getElementById("main")


const Movies = () => {
    const [movie, setMovie] = useState('')
    const [movieEl, setMovieEl] = useState([]);
    useEffect(()=>{
        getMovies(API_URL)
    }, [])
    function getMovies(url){
        fetch(url).then(res => res.json()).then(data => {
            showMovies(data.results);
        })
        function showMovies(data){
            main.innerHTML = '';
            data.forEach(movie => {
                const {title, poster_path, vote_average, overview} = movie
                const movieEl = document.createElement('div');
                movieEl.classList.add('movie')
                movieEl.innerHTML = `
   <div class="movie-info">
      <h2>${title}</h2>
   </div>
   <img src="${image_url + poster_path}" alt="${title}" />
   <div class="overview">
      <h1>Overview</h1>
      ${overview}
   </div>`;
        
                main.appendChild(movieEl)
            })
        }
    }
  return (
    <>
    <main id="main">
        <div className="movie">
        </div>
    </main>
    </>
  )
}

export default Movies
