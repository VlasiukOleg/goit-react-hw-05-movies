import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/moviesApi';

export const Rewiews = () => {
  const { id } = useParams();
  const [reviews, setRewiews] = useState([]);

  useEffect(() => {
    const getReviewsList = async () => {
      try {
        const reviewsList = await getReviews(id);
        setRewiews(reviewsList.data.results);
        console.log(reviewsList.data.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    getReviewsList();
  }, [id]);

  if (reviews.length === 0) {
    return <p>Not found any reviews</p>;
  }

  return (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <p>Author: {review.author}</p>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
};
