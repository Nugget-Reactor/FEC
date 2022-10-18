import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Ratings = ({ratings, totalCount}) => {

  const getPercentage = (starValue) => {
    if(ratings && ratings[starValue] && totalCount){
      return Number(ratings[starValue])/totalCount * 100;
    }
    return 0;
  }

  return(
    <div>
      <div>
        <span>5 stars</span><RatingBar fill={getPercentage(5)} />
      </div>
      <div>
        <span>4 stars</span><RatingBar fill={getPercentage(4)} />
      </div>
      <div>
        <span>3 stars</span><RatingBar fill={getPercentage(3)} />
      </div>
      <div>
        <span>2 stars</span><RatingBar fill={getPercentage(2)} />
      </div>
      <div>
        <span>1 stars</span><RatingBar fill={getPercentage(1)} />
      </div>
    </div>
  );
}
const RatingBar = styled.div`
  width: 200px;
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

export default Ratings;