import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getTrendsDayMovies } from 'services/moviesApi';
import { Link } from './TrendsMoviesList.styled';

import { HomeTitle } from './TrendsMoviesList.styled';
import { TrendsList } from './TrendsMoviesList.styled';

export const TrendsMoviesList = () => {
  const location = useLocation();
  console.log(location);
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
    <>
      <HomeTitle>Trending Movies of Day</HomeTitle>
      <TrendsList>
        {trendsMovies?.map(movie => (
          <Link
            key={movie.id}
            to={`movies/${movie.id}`}
            state={{ from: location }}
          >
            <li>{movie.title}</li>
          </Link>
        ))}
      </TrendsList>
    </>
  );
};
