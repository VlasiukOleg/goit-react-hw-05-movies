import { Outlet, useLocation, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMoviesById } from 'services/moviesApi';
import { BackLink } from 'components/BackLink/BackLink';

import {
  MovieDetailsWrap,
  MovieDetailsImg,
  MovieDetailsInfo,
  MovieAddInfoWrap,
  Link,
} from './TrendsMovieDetails.styled';

const TrendsMovieDetails = () => {
  const location = useLocation();
  const backLinkGref = location.state?.from ?? '/movies';

  const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
  const { id } = useParams();

  const [movieDetails, setMovieDetails] = useState(null);
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
      <BackLink to={backLinkGref}>BACK TO TREND MOVIES</BackLink>
      {movieDetails && (
        <div>
          <MovieDetailsWrap>
            <MovieDetailsImg>
              <img
                src={`${IMAGE_URL}${movieDetails.poster_path}`}
                alt={movieDetails.original_title}
                width={180}
              />
            </MovieDetailsImg>
            <MovieDetailsInfo>
              <h2>{movieDetails.original_title}</h2>
              <p>
                <b>Overview:</b> {movieDetails.overview}
              </p>
              <p>
                <b>Genres:</b> {genres}
              </p>
            </MovieDetailsInfo>
          </MovieDetailsWrap>

          <MovieAddInfoWrap>
            <h2>Additional Information</h2>
            <ul>
              <li>
                <Link to="cast" state={{ from: backLinkGref }}>
                  Cast
                </Link>
              </li>
              <li>
                <Link to="reviews" state={{ from: backLinkGref }}>
                  Rewiew
                </Link>
              </li>
            </ul>
          </MovieAddInfoWrap>

          <Outlet />
        </div>
      )}
    </div>
  );
};

export default TrendsMovieDetails;
