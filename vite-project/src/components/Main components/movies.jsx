import './main.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
<script src="https://kit.fontawesome.com/cdf8014e25.js" crossorigin="anonymous"></script>

function MovieList() {
    const [movies, setMovies] = useState([]);
  
    useEffect(() => {
      async function fetchMovies() {
        try {
          const response = await axios.get('https://santosnr6.github.io/Data/movies.json');
          setMovies(response.data);
        } catch (error) {
          console.error('Error fetching movies:', error);
        }
      }
  
      fetchMovies();
    }, []);
  
    return (
      <div className='movies-container'>
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
  
  function MovieCard({ movie }) {
    return (
      <>
      <div className="movie-card">
        <h2>{movie.title}</h2>
        <i className='fa-regular fa-star'></i>
        <div className="movie-overlay"></div>
        <img src={movie.poster} alt="" />
      </div>
      </>
    );
  }
  
  export default MovieList;