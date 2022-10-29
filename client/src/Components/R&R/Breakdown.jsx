import React, { useState, useEffect } from 'react';
import { createStars, getAverage } from '../../Tools/createStars';
import RatingFilter from './RatingFilter.jsx';
import Characteristics from './Characteristics.jsx';
import styled from 'styled-components';

const Breakdown = ({ currentMeta, totalCount, filters, modifyFilters }) => {
  const [avgRating, setAvgRating] = useState(null);

  useEffect(() => {
    setAvgRating(getAverage(currentMeta.ratings));
  }, [currentMeta]);

  const getRecommendedRate = () => {
    if(currentMeta.recommended) {
      let trues = Number(currentMeta.recommended.true) || 0;
      let falses = Number(currentMeta.recommended.false) || 0;
      if(trues === 0 && falses === 0) {
        return 0;
      }
      return (trues/(trues + falses) * 100).toFixed(0);
    }
  }
  const renderFilters = () => {
    let filters = [];
    if(currentMeta.ratings) {
      for(let i = 5; i >= 1; i--) {
        filters.push(<RatingFilter ratingCount={currentMeta.ratings[i]} totalCount={totalCount} starValue={i} modifyFilters={modifyFilters} key={i} />);
      }
    }
    return filters;
  }

  return(
    <div>
      <div>
        {avgRating
        ? <div>
          <div><BoldText data-testid="avgRating">{avgRating}</BoldText> {createStars(avgRating)}</div>
          <div>{totalCount} total reviews</div>
        </div>
        : <BoldText data-testid="noReviews">No Reviews Yet</BoldText>}
      </div>
      <div>
        {filters.length
        ? <div data-testid="currentFilters">Filtered by star rating(s): {filters.sort().map((filter, i)=>{
          if(i > 0) {
            return ', '+filter;
          }
          return filter;
        })}
        <ClearButton onClick={()=>modifyFilters()}>Clear</ClearButton>
        </div>
        : null}
        {renderFilters()}
      </div>
      <div>
        {avgRating ? `${getRecommendedRate()}% of reviews recommend this product` : null}
      </div>
      <Characteristics chars={currentMeta.characteristics} />
    </div>
  );
}

const BoldText = styled.span`
  font-size: 2rem;
  font-weight: 600;
`
const ClearButton = styled.button`
  background: none;
  border: none;
  text-decoration: underline;
  display: block;
  color:blue;
  cursor: pointer;
`

export default Breakdown;