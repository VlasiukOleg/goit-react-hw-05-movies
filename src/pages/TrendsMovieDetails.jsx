import { Link, Outlet, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMoviesById } from 'services/moviesApi';

export const TrendsMovieDetails = () => {
  const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
  const { id } = useParams();
  console.log(id);
  const [movieDetails, setMovieDetails] = useState({});
  const [movieGenres, setMovieGenres] = useState([]);

  let genres = movieGenres.map(genre => genre.name).join(', ');

  useEffect(() => {
    const getMoviesDetails = async () => {
      try {
        const movieTrendsDetails = await getMoviesById(id);
        setMovieDetails(movieTrendsDetails.data);
        setMovieGenres(movieTrendsDetails.data.genres);
        console.log(movieTrendsDetails.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getMoviesDetails();
  }, [id]);

  return (
    <div>
      <img
        src={`${IMAGE_URL}${movieDetails.backdrop_path}`}
        alt={movieDetails.original_title}
        width={360}
      />
      <h2>{movieDetails.original_title}</h2>
      <p>Overview: {movieDetails.overview}</p>
      <p>Genres: {genres}</p>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Rewiew</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
