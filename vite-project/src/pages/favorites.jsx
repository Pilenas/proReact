import React, { useState, useEffect } from 'react';
import './pages.css';

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  const toggleFavorite = (movieId) => {
    const updatedFavorites = favorites.some(movie => movie.imdbid === movieId)
      ? favorites.filter(movie => movie.imdbid !== movieId)
      : [...favorites, { imdbid: movieId }];

    setFavorites(updatedFavorites);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
  };

  return (
    <section className="favorites-section">
      {favorites.length === 0 ? (
        <div className="favorites-empty">
          <p>Dina favoriter är tomma.</p>
        </div>
      ) : (
        favorites.map(movie => (
          <div className="movie-card" key={movie.imdbid}>
            <h2>{movie.title}</h2>
            <div className="image-wrapper">
              <i 
                className={`favStar fa-solid fa-star ${favorites.some(item => item.imdbid === movie.imdbid) ? 'active' : ''}`}
                onClick={() => toggleFavorite(movie.imdbid)}
              ></i>
              <img className="movie-poster" src={movie.poster} alt="" /> 
            </div>
          </div>
        ))
      )}
    </section>
  );
}

export default Favorites;