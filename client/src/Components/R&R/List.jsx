import React from 'react';
import Tile from './Tile.jsx';
import styled from 'styled-components';

const List = ({ reviews, currentCount }) => {

  return(
    <ScrollableList>
      {reviews.slice(0, currentCount).map(review => <Tile key={review.review_id} review={review} />)}
    </ScrollableList>
  );
}

const ScrollableList = styled.div`
  max-height: 65vh;
  overflow:auto;
`

export default List;