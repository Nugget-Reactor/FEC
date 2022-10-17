import React from 'react';
import styled from 'styled-components';

const SearchQnA = () => {
  return (
    <SearchContainer>
      <Input placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." />
      <SearchIcon className="fa-solid fa-magnifying-glass"></SearchIcon>
    </SearchContainer>
  );
}

export default SearchQnA;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input`
  width: 70vw;
  padding: 5px;
  display: inline-flex;
  justify-content: center;
`;

const SearchIcon = styled.i`
  position: relative;
  top: 0;
  right: 20px;
  z-index: 1;
`;