import { SearchBox } from 'components/SearchBox/SearchBox';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { getSearchMovies } from 'services/moviesApi';

import { MoviesList, Link } from './MoviesPage.styled';

const MoviesPage = () => {
  const location = useLocation();
  console.log(location);
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState(null);

  const queryString = searchParams.get('query') ?? '';

  const onSearchMovies = query => {
    setSearchParams(query !== '' ? { query } : {});
  };

  useEffect(() => {
    const searchMovies = async () => {
      try {
        const moviesList = await getSearchMovies(queryString);
        setMovies(moviesList.data.results);
        console.log(moviesList.data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    searchMovies();
  }, [queryString]);

  return (
    <>
      <SearchBox onSubmit={onSearchMovies} />
      <MoviesList>
        {movies?.map(movie => (
          <Link key={movie.id} to={`${movie.id}`} state={{ from: location }}>
            <li>{movie.title}</li>
          </Link>
        ))}
      </MoviesList>
    </>
  );
};

export default MoviesPage;
