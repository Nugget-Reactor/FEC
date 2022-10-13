import React from 'react';

const Tile = ({ review }) => {

  return(
    <div>
      <div>* * * * * {review.rating}</div> <span>{review.reviewer_name}{review.date}</span>
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