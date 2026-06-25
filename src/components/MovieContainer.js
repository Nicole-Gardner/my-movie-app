// src/MovieContainer.js
import React, { useEffect, useState,} from "react";
import { Link } from "react-router-dom";

const MovieContainer = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("harry potter");
  const [sortOption, setSortOption] = useState("newest");
useEffect(() => {
  const fetchMovies = async () => {
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=51106b2b&s=${searchQuery}`
    );
    const data = await res.json();

    if (data.Search) {
      setMovies(data.Search);
    } else {
      setMovies([]);
    }
  };

  fetchMovies();
}, [searchQuery]);

  return (
    <div className="row">
      <div className="search__container">
        <input
          type="text"
          value={searchQuery}
          className="search__container--input"
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for movies"
        />
        <button
          className="search__container--btn"
          onClick={() => {
            setSearchQuery(searchQuery);
          }}
        >
          Search Movie
        </button>
        <select
          onChange={(e) => setSortOption(e.target.value)}
          value={sortOption}
          className="search__container--sort"
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>

      <div className="movie__container">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <Link to={`/movies/${movie.imdbID}`} key={movie.imdbID}>
              <div className="movie">
                <h1>{movie.Title}</h1>
                <p>{movie.Year}</p>

                <figure>
                  <img src={movie.Poster} alt={movie.Title} />
                </figure>
              </div>
            </Link>
          ))
        ) : (
          <p>No movies found.</p>
        )}
      </div>
    </div>
  );
};

export default MovieContainer;
