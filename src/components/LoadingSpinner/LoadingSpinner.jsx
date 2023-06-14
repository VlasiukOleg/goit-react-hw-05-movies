import { Circles } from 'react-loader-spinner';

export const LoadingSpinner = () => {
  return (
    <Circles
      height="80"
      width="80"
      color=" orangered"
      ariaLabel="circles-loading"
      wrapperClass="spinner"
      visible={true}
    />
  );
};
