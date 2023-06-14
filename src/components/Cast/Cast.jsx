import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'services/moviesApi';

import placeholder from '../../img/holdercast.jpeg';

import { CastList, CastItem } from './Cast.styled';

const Cast = () => {
  const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';
  const { id } = useParams();
  const [characters, setCharacters] = useState([]);
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    const getCastList = async () => {
      try {
        const castList = await getCast(id);
        setCharacters(castList.data.cast);
        console.log(castList.data.cast);
        if (castList.data.cast.length === 0) {
          setIsNotFound(true);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    getCastList();
  }, [id]);

  return (
    <CastList>
      {isNotFound && <p>We don't find any casts for this movie</p>}
      {characters.map(character => (
        <CastItem key={character.id}>
          <img
            src={
              character.profile_path
                ? `${IMAGE_URL}${character.profile_path}`
                : placeholder
            }
            alt={character.name}
            width={180}
          />
          <p>
            <b>Name: </b>
            {character.name}
          </p>
          <p>
            <b>Character:</b> {character.character}
          </p>
        </CastItem>
      ))}
    </CastList>
  );
};

export default Cast;
