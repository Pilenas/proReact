import React, { useState, useEffect } from 'react';
import './header.css';

function Header() {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        if (searchQuery.trim() !== '') {
            fetch(`http://www.omdbapi.com/?apikey=2ec75983&s=${searchQuery}`)
                .then(response => response.json())
                .then(data => {
                    if (data.Search) {
                        setSearchResults(data.Search.slice(0, 5)); // Begränsa till högst 5 resultat
                    } else {
                        setSearchResults([]);
                    }
                })
                .catch(error => console.error('Error fetching search results:', error));
        } else {
            setSearchResults([]);
        }
    }, [searchQuery]);

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className="header">
            <div className="logo-wrapper">
                <img className='logo' src="./src/logo/logo.png" alt="logo" />
            </div>

            <div className="search-box">
                <input
                    className='search-input'
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                    placeholder="Hitta din film..."
                />
                <div className="search-results">
                    {searchResults && searchResults.map((movie, index) => (
                        <div key={index} className="result-item">
                            <div>
                                <p>Title: {movie.Title}</p>
                                <p>Year: {movie.Year}</p>
                                <p>*FAVORITMARKÖR*  *WATCH LATER MARKÖR*</p>
                            </div>
                            <img src={movie.Poster} alt={movie.Title} />
                            <hr />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Header;
