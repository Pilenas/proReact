import './home.css';
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
          console.log(response)
        } catch (error) {
          console.error('Error fetching movies:', error);
        }
      }
  
      fetchMovies();
    }, []);
  
    return (
      <div className='movies-container'>
        {movies.map(movie => (
          <MovieCard key={movie.imdbid} movie={movie} />
        ))}
      </div>
    );
  }
  
  function MovieCard({ movie }) {
    
    const handleToggle = (listName) => {
        const storedMovies = JSON.parse(localStorage.getItem(listName)) || [];
        const movieIndex = storedMovies.findIndex(item => item.imdbid === movie.imdbid);
  
        let updatedList;
        if (movieIndex !== -1) {
            updatedList = storedMovies.filter((item) => item.imdbid !== movie.imdbid);
        } else {
            updatedList = [...storedMovies, movie];
        }
  
        localStorage.setItem(listName, JSON.stringify(updatedList));
    };

    return (
        <div className="movie-card">
            <h2>{movie.title}</h2>
            <div className="image-wrapper">
                {/* För favoriter */}
                <i className="favStar fa-solid fa-star" onClick={() => handleToggle('favorites')}></i>
                {/* För watchlist */}
                <i className="watchPlus fa-solid fa-plus" onClick={() => handleToggle('watchList')}></i>
                <img className="movie-poster" src={movie.poster} alt="" /> 
            </div>
        </div>
    );
}



  
  export default MovieList;