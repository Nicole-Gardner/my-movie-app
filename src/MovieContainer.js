// src/MovieContainer.js
import React, { useEffect, useState } from 'react';

const MovieContainer = () => {
  const [movies, setMovies] = useState([]);
  const [searchInput, setSearchInput] = useState("harry potter");
  const [sortOption, setSortOption] = useState("newest");


useEffect(() => {
  const fetchMovies = async () => {
   const res = await fetch(`https://www.omdbapi.com/?apikey=51106b2b&s=${searchInput}`);
    const data = await res.json();

    if (data.Search) {
      let sortedMovies = data.Search;

      if (sortOption === "newest") {
        sortedMovies.sort((a, b) => b.Year - a.Year);
      } else {
        sortedMovies.sort((a, b) => a.Year - b.Year);
      }

      setMovies(sortedMovies);
    } else {
      setMovies([]);
    }
  };

  fetchMovies();
}, [searchInput, sortOption]);

  

  return (
    <div>
      <input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Search for movies"
      />
      <select onChange={(e) => setSortOption(e.target.value)} value={sortOption}>
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
      </select>
      <div className="movie__container">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div className="movie" key={movie.imdbID}>
              <h1>{movie.Title}</h1>
              <p>{movie.Year}</p>
            </div>
          ))
        ) : (
          <p>No movies found.</p>
        )}
      </div>
    </div>
  );
};

export default MovieContainer;