import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';

import { HomePage } from 'pages/HomePage';
import { MoviesPage } from 'pages/MoviesPage';
import { TrendsMovieDetails } from 'pages/TrendsMovieDetails';
import { Cast } from './Cast/Cast';
import { Rewiews } from './Reviews/Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MoviesPage />} />
        <Route path="movies/:id" element={<TrendsMovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Rewiews />} />
        </Route>
      </Route>
    </Routes>
  );
};
