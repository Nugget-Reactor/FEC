import React from 'react';
import styled from 'styled-components';

const SearchQnA = () => {
  return (
    <SearchContainer>
      <Input placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." />
      <Button>Search Now!</Button>
    </SearchContainer>
  );
}

export default SearchQnA;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Input = styled.input`
  z-index: 100;
  width: 90%;
  display: flex;
`;

const Button = styled.button`
  z-index: 1;
  display: flex;
  position: relative;
  border: none;
`;