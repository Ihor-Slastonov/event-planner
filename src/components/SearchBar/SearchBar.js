import { useState } from 'react';

import { BiSearch } from 'react-icons/bi';
import { IoClose } from 'react-icons/io5';

import {
  SearchForm,
  SearchButton,
  SearchInput,
  SearchClearButton,
} from './SearchBar.styled';
import { toast } from 'react-hot-toast';

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');

  const onInpuntChange = e => setInputValue(e.currentTarget.value);

  const onFormSubmit = e => {
    e.preventDefault();
    const value = inputValue.trim();
    if (value === '') return toast.error('The input field must be non-empty');
    console.log(value);
  };

  const onClearButtonClick = () => setInputValue('');

  return (
    <SearchForm onSubmit={onFormSubmit}>
      <SearchButton type="submit" onClick={onFormSubmit}>
        <BiSearch size={24} />
      </SearchButton>

      <SearchClearButton
        type="button"
        onClick={onClearButtonClick}
        data-words={inputValue !== ''}
      >
        <IoClose size={24} />
      </SearchClearButton>

      <SearchInput
        value={inputValue}
        onChange={onInpuntChange}
        type="text"
        placeholder="Search by keywords"
      />
    </SearchForm>
  );
};

export default SearchBar;
