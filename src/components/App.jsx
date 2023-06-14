import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from './SharedLayout/SharedLayout';

const HomePage = lazy(() => import('../pages/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const TrendsMovieDetails = lazy(() => import('../pages/TrendsMovieDetails'));
const Cast = lazy(() => import('../components/Cast/Cast'));
const Rewiews = lazy(() => import('../components/Reviews/Reviews'));

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
