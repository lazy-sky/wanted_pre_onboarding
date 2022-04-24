import { useState } from 'react';
import styled from 'styled-components';

import { Container } from './Shape';

function Dropdown({ title, items, currentItem }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedText, setSelectedText] = useState(currentItem);
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState(items);

  const handleToggleDropdown = () => {
    setIsDropdownOpen(prev => !prev);
  };

  const handleChangeSearchText = (e) => {
    const { target: { value } } = e;
    setSearchText(value);
    setSearchResults(items.filter(item => item.toLowerCase().includes(value)));
  };

  const handleClickSearchResult = (text) => {
    setSelectedText(text);
    setIsDropdownOpen(false);
  };

  return (
    <>
      <h2>{title}</h2>
      <Container backgroundColor="#fcfcfc">
        <DropdownMenu onClick={handleToggleDropdown}>
          {selectedText}
          <img src="/images/caret-down.svg" alt="드롭다운" />
        </DropdownMenu>
        {isDropdownOpen && (
          <SearchContainer>
            <SearchBar>
              <input
                placeholder="Search Symbol"
                value={searchText}
                onChange={handleChangeSearchText}
              />
              <img src="/images/magnifying-glass.svg" alt="검색" />
            </SearchBar>
            {searchResults.map((item) => (
              <SearchItem
                key={item}
                onClick={() => handleClickSearchResult(item)
                }>
                {item}
              </SearchItem>
            ))}
          </SearchContainer>
        )}
      </Container>
    </>
  );
};

const DropdownMenu = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
  border: 1px solid #ececec;
  border-radius: 4px;
  padding: 8px;
  cursor: pointer;

  img {
    width: 12px;
  }
`;

const SearchContainer = styled.ul`
  border: 1px solid #ececec;
  border-radius: 4px;
  list-style: none;
  box-shadow: 0px -2px 4px 0px rgba(0, 0, 0, 0.1);
`;

const SearchBar = styled.div`
  position: relative;
  border-top: 1px solid lightgray;
  border-bottom: 1px solid lightgray;
  
  input {
    font-size: 16px;
    margin-left: 28px;
    padding: 12px;
    border: none;
    background-color: inherit;
    &:focus {
      outline: none;
    }
  }

  img {
    position: absolute;
    left: 12px; 
    top: 12px;
    width: 16px;
  }
`;

const SearchItem = styled.li`
  padding: 8px 40px;
  cursor: pointer;

  &:hover {
    background-color: lightgray;
  }
`;

export default Dropdown;
