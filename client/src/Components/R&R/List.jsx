import React from 'react';
import Tile from './Tile.jsx';
import styled from 'styled-components';

const List = ({ reviews }) => {

  return(
    <ScrollableList>
      {reviews.map(review => <Tile key={review.review_id} review={review} />)}
    </ScrollableList>
  );
}

const ScrollableList = styled.div`
  max-height: 75vh;
  overflow:auto;
`

export default List;