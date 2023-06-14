import { TrendsMoviesList } from 'components/TrendsMoviesList/TrendsMoviesList';
import { Suspense } from 'react';

const HomePage = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TrendsMoviesList />
    </Suspense>
  );
};

export default HomePage;
