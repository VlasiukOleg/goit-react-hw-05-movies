import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTrendsDayMovies } from 'services/moviesApi';

export const TrendsMoviesList = () => {
  const [trendsMovies, setTrendsMovie] = useState(null);
  useEffect(() => {
    const getTrendsMovies = async () => {
      try {
        const trendsMovies = await getTrendsDayMovies();
        setTrendsMovie(trendsMovies.data.results);
        console.log(trendsMovies.data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    getTrendsMovies();
  }, []);

  return (
    <ul>
      {trendsMovies?.map(movie => (
        <Link key={movie.id} to={`movies/${movie.id}`}>
          <li>{movie.title}</li>
        </Link>
      ))}
    </ul>
  );
};
