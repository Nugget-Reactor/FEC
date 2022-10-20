import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const RatingFilter = ({rating, starValue, totalCount}) => {

  const getPercentage = () => {
    if(rating && totalCount){
      return Number(rating)/totalCount * 100;
    }
    return 0;
  }
  const filter = () => {
    setFilter(starValue);
  }
  return(
    <div>
      <FilterButton onClick={filter}>{starValue} stars</FilterButton><RatingBar fill={getPercentage(starValue)} />
    </div>
  );
}
const FilterButton = styled.button`
  text-decoration: underline;
  cursor: pointer;
  background: none;
  border: none;

`
const RatingBar = styled.div`
  width: 150px;
  height: 10px;
  background-color: lightgrey;
  display: inline-block;
  position: relative;
  margin-left: 10px;

  &::after{
    content: 'x';
    position: absolute;
    top: 0;
    left: 0;
    width: ${props=>props.fill}%;
    height: 100%;
    overflow: hidden;
    color: green;
    background-color: green;
  }
`
export default RatingFilter;