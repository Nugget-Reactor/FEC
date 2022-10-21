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
      <RatingSpan>{starValue} stars</RatingSpan><RatingBar fill={getPercentage(starValue)} />
    </SelectableDiv>
  );
}
const SelectableDiv = styled.div`
  cursor: pointer;

  &:hover {
    background-color: pink;
  }
`
const RatingSpan = styled.span`
  text-decoration: underline;
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