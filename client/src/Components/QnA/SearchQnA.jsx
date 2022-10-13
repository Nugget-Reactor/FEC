import React from 'react';
import styled from 'styled-components';

const SearchQnA = () => {
  return (
    <div id="SearchQnA">
      <Input placeholder="HAVE A QUESTION? SEARCH FOR ANSWERS..." />
      <Button>Search Now!</Button>
    </div>
  );
}

export default SearchQnA;

const Input = styled.input`
  width: 100%;
  display: flex;
`;

const Button = styled.button`
  background-color: red;
  display: flex;
  border: none;
`;