import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const RatingFilter = ({rating, starValue, totalCount, modifyFilters}) => {

  const getPercentage = () => {
    if(rating && totalCount){
      return Number(rating)/totalCount * 100;
    }
    return 0;
  }

  return(
    <SelectableDiv onClick={()=>modifyFilters(starValue)}>
      <RatingSpan>{starValue} stars</RatingSpan>
      <RatingBar fill={getPercentage(starValue)} />
      <span>{rating}</span>
    </SelectableDiv>
  );
}
const SelectableDiv = styled.div`
  cursor: pointer;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 3fr) minmax(0, 0.5fr);
  align-items: center;
  justify-items: center;
  &:hover {
    background-color: #ffebee;
  }
`
const RatingSpan = styled.span`
  text-decoration: underline;
  justify-self:start;
`
const RatingBar = styled.div`
  width: 100%;
  height: 10px;
  background-color: lightgrey;
  display: inline-block;
  position: relative;

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