import React, { useState, useEffect } from 'react';
import './pages.css';


function Watchlist() {
  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    const storedWatchList = JSON.parse(localStorage.getItem('watchList')) || [];
    setWatchList(storedWatchList);
  }, []);

  const handleRemoveFromWatchList = (movieId) => {
    const updatedWatchList = watchList.filter(movie => movie.imdbid !== movieId);

    setWatchList(updatedWatchList);

    localStorage.setItem('watchList', JSON.stringify(updatedWatchList));
};


  return (
    <section className="watchList-section">
      {watchList.map(movie => (
        <div className="movie-card" key={movie.imdbid} movie={movie}>
          <h2>{movie.title}</h2>
          <div className="image-wrapper">
            <i className="favStar fa-solid fa-star"></i>
            <i className="watchPlus fa-solid fa-minus" onClick={() => handleRemoveFromWatchList(movie.imdbid)}></i>
            <img className="movie-poster" src={movie.poster} alt="" /> 
          </div>
        </div>
      ))}
    </section>
  );
}

export default Watchlist;
