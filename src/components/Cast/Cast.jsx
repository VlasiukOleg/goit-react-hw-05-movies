import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'services/moviesApi';

export const Cast = () => {
  const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
  const { id } = useParams();
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCastList = async () => {
      try {
        const castList = await getCast(id);
        setCharacters(castList.data.cast);
        console.log(castList.data.cast);
      } catch (error) {
        console.log(error.message);
      }
    };
    getCastList();
  }, [id]);

  return (
    <ul>
      {characters.map(character => (
        <li key={character.id}>
          <img
            src={`${IMAGE_URL}${character.profile_path}`}
            alt={character.name}
            width={180}
          />
          <p>Name: {character.name}</p>
          <p>Character: {character.character}</p>
        </li>
      ))}
    </ul>
  );
};
