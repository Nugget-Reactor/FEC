import React from 'react';
import styled from 'styled-components';

export const getAverage = (ratings) => {
  let totalRatings = 0;
  let numberOfRatings = 0;

  for (let key in ratings) {
    let currentRatingsCount = Number(ratings[key]);
    totalRatings += (currentRatingsCount * Number(key));
    numberOfRatings += currentRatingsCount;
  }
  return (totalRatings/numberOfRatings).toFixed(1);
}

export const createStars = (avgRating) => {
  //If avg rating is a string, turn it into a number
  let avg = parseFloat(avgRating);
  let result = [];

  //Find any decimal remainder
  let remainder = avgRating % 1;
  let fill = 0;
  if(remainder >= 0.75) {
    fill = 65;
  } else if (remainder >= 0.5) {
    fill = 50;
  } else if (remainder >= 0.25) {
    fill = 35;
  }

  for(let i = 1; i <= 5; i++) {
    if(i <= avgRating) {
      result.push(<Star fill={100} className="fa-solid fa-star" key={i}></Star>)
    } else if (fill > 0) {
      result.push(<Star fill={fill} className="fa-solid fa-star" key={i}></Star>)
      fill = 0;
    } else {
      result.push(<Star fill={0} className="fa-solid fa-star" key={i}></Star>)
    }
  }
  return result;
}

const Star = styled.i`
  display: inline-block;
  position: relative;
  font-size: 20px;
  color: #ddd;

  &::after {
    font-family: FontAwesome;
    content: "\\f005";
    position: absolute;
    left: 0;
    top: 0;
    width: ${props => props.fill}%;
    overflow: hidden;
    color: #f80;
  }
`