import React, { useState } from 'react';
import styled from 'styled-components';

const SearchQnA = ({ query, setQuery }) => {

  return (
    <SearchContainer>
      <Input
        placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..."
        value={query}
        onChange={e => {
          setQuery(e.target.value);
        }}
      />
      <SearchIcon className="fa-solid fa-magnifying-glass"></SearchIcon>
    </SearchContainer>
  );
};

export default SearchQnA;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 30px 30px;
`;

const Input = styled.input`
  width: 70vw;
  padding: 5px;
  display: inline-flex;
  justify-content: center;
  font-size: 1em;
`;

const SearchIcon = styled.i`
  position: relative;
  top: 0;
  right: 3%;
  z-index: 1;
`;