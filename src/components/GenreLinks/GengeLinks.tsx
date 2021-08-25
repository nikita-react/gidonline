import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { GenreLinksWrapper } from './styled';
import GenreLink from '../GenreLink';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { getGenres } from '../../store/genres/action';

const GengeLinks: React.FC = () => {
  const { genres } = useTypedSelector((state) => state.genre);

  const dispatch = useDispatch();

  useEffect(() => {
    const getGenresList = () => dispatch(getGenres());
    getGenresList();
  }, [dispatch]);
  console.log(genres);

  return (
    <>
      <GenreLinksWrapper>
        {genres.map((genre) => (
          <GenreLink key={genre.id} name={genre.name} url={genre.url} />
        ))}
      </GenreLinksWrapper>
    </>
  );
};
export default GengeLinks;
