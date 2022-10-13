import React from 'react';
import {format, parseISO} from 'date-fns';

const Tile = ({ review }) => {

  const createStars = () => {
    let stars = '';
    for(let i = 0; i < 5; i++) {
      if(i < review.rating){
        stars += '★';
      } else {
        stars += '☆';
      }
    }
    return stars;
  }

  return(
    <div>
      <div>{createStars()} <span>{review.reviewer_name}, {format(parseISO(review.date), 'MMMM d, yyyy')}</span></div>
      <h5>{review.summary}</h5>
      <p>{review.body}</p>
      {review.recommend && <div>I recommend this product!</div>}
      {review.response && <div>{review.reponse}</div>}

      {review.photos.length
      && <div>
        {review.photos.map(photo => <img key={photo.id} src={photo.url} />)}
      </div> }

      <div>Helpful? <button>Yes</button>({review.helpfulness})</div>

    </div>
  );
}

export default Tile;