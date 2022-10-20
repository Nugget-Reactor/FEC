import React, { useState, useEffect } from 'react';
import { createStars, getAverage } from '../../Tools/createStars';
import RatingFilter from './RatingFilter.jsx';
import Characteristics from './Characteristics.jsx';
import styled from 'styled-components';

const Breakdown = ({ metadata, totalCount }) => {
  const [avgRating, setAvgRating] = useState(0);

  useEffect(() => {
    setAvgRating(getAverage(metadata.ratings))
  }, [metadata]);

  const getRecommendedRate = () => {
    if(metadata.recommended) {
      let trues = Number(metadata.recommended.true) || 0;
      let falses = Number(metadata.recommended.false) || 0;
      if(trues === 0 && falses === 0) {
        return 0;
      }
      return (trues/(trues + falses) * 100).toFixed(0);
    }
  }
  const renderFilters = () => {
    let filters = [];
    if(metadata.ratings) {
      for(let i = 5; i >= 1; i--) {
        filters.push(<RatingFilter rating={metadata.ratings[i]} totalCount={totalCount} starValue={i} key={i} />)
      }
    }
    return filters
  }

  return(
    <div>
      <div>
        <AvgRating>{avgRating}</AvgRating>{createStars(avgRating)}
      </div>
      {renderFilters()}
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