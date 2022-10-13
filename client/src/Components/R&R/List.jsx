import React from 'react';
import Tile from './Tile.jsx';

const List = ({ reviews }) => {

  return(
    <div>
      {reviews.map(review => <Tile key={review.review_id} review={review} />)}
    </div>
  );
}

export default List;