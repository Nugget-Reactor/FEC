import React, { useState, useEffect } from 'react';
import { createStars, getAverage } from '../../Tools/createStars';

const Breakdown = ({ metadata }) => {
  const [avgRating, setAvgRating] = useState(0);

  useEffect(() => {
    setAvgRating(getAverage(metadata.ratings))
  }, [metadata]);

  const getRecommendedRate = () => {
    if(metadata.recommended) {
      return Number(metadata.recommended.true)/(Number(metadata.recommended.true) + Number(metadata.recommended.false)) * 100;
    }
  }

  return(
    <div>
      <div>
        {avgRating}{createStars(avgRating)}
      </div>

      <div>
        {getRecommendedRate()}% of reviews recommend this product
      </div>
    </div>
  );
}

export default Breakdown;