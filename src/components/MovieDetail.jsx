import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetail = () => {
  const { id } = useParams(); // Get the movie ID from the URL
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(`https://www.omdbapi.com/?apikey=51106b2b&i=${id}`); // Replace with your API
        const data = await response.json();
        setMovie(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]); // Fetch when the component mounts or id changes

  if (loading) return <div>Loading...</div>;
  if (!movie) return <div>Movie not found!</div>;

  return (
    <div>
      <h1>{movie.Title}</h1>
      <p>{movie.Plot}</p>
      {/* Add other movie details as needed */}
    </div>
  );
};

export default MovieDetail;