import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/moviesApi';

import { ReviewsList } from './Reviews.styled';

const Rewiews = () => {
  const { id } = useParams();
  const [reviews, setRewiews] = useState([]);
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    const getReviewsList = async () => {
      try {
        const reviewsList = await getReviews(id);
        setRewiews(reviewsList.data.results);
        console.log(reviewsList.data.results);
        if (reviewsList.data.results.length === 0) {
          setIsNotFound(true);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    getReviewsList();
  }, [id]);

  return (
    <>
      <ReviewsList>
        {isNotFound && <p>We don't find any reviews for this movie</p>}
        {reviews.map(review => (
          <li key={review.id}>
            <p>
              <b>Author:</b> {review.author}
            </p>
            <p>{review.content}</p>
          </li>
        ))}
      </ReviewsList>
    </>
  );
};

export default Rewiews;
