import React, { useState, useEffect } from 'react';
import { createStars, getAverage } from '../../Tools/createStars';
import Ratings from './Ratings.jsx';
import Characteristics from './Characteristics.jsx';
import styled from 'styled-components';

const Breakdown = ({ metadata, totalCount }) => {
  const [avgRating, setAvgRating] = useState(0);

  useEffect(() => {
    setAvgRating(getAverage(metadata.ratings))
  }, [metadata]);

  const getRecommendedRate = () => {
    if(metadata.recommended) {
      let trues = metadata.recommended.true || 0;
      let falses = metadata.recommended.false || 0;
      return (Number(trues)/(Number(trues) + Number(falses)) * 100).toFixed(0);
    }
  }

  return(
    <div>
      <div>
        <AvgRating>{avgRating}</AvgRating>{createStars(avgRating)}
      </div>
      <Ratings ratings={metadata.ratings} totalCount={totalCount} />
      <div>
        {getRecommendedRate()}% of reviews recommend this product
      </div>
      <Characteristics chars={metadata.characteristics} />
    </div>
  );
}

const AvgRating = styled.span`
  font-size: 2rem;
  font-weight: 600;
`

export default Breakdown;