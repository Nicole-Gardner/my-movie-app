// src/MovieContainer.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MovieContainer = () => {
  const [movies, setMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState("harry potter");
  const [sortOption, setSortOption] = useState("newest");

  const fetchMovies = async () => {
    const res = await fetch(
      `https://www.omdbapi.com/?apikey=51106b2b&s=${searchQuery}`,
    );
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

  useEffect(() => {
    fetchMovies();
  }, [sortOption]);

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search for movies"
      />
      <button className="btn" onClick={fetchMovies}>
        Search Movie
      </button>
      <select
        onChange={(e) => setSortOption(e.target.value)}
        value={sortOption}
      >
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
      </select>
      <div className="movie__container">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID}>
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