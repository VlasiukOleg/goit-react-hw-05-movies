import { useState } from 'react';
import { SearchForm, Input, Icon, SearchBtn } from './SearchBox.styled';

export const SearchBox = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = ({ target }) => {
    setSearchQuery(target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(searchQuery);
    setSearchQuery('');
  };

  return (
    <SearchForm onSubmit={handleSubmit}>
      <Input
        type="text"
        name="query"
        value={searchQuery}
        onChange={handleChange}
      />
      <SearchBtn type="submit">
        <Icon />
      </SearchBtn>
    </SearchForm>
  );
};
