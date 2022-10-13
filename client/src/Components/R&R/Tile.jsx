import React from 'react';
import { format, parseISO } from 'date-fns';
import styled from 'styled-components';

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
    <TileStyle>
      <div>{createStars()} <span>{review.reviewer_name}, {format(parseISO(review.date), 'MMMM d, yyyy')}</span></div>
      <ReviewTitle>{review.summary}</ReviewTitle>
      <p>{review.body}</p>
      {review.recommend && <div>I recommend this product!</div>}
      {review.response && <div>{review.reponse}</div>}

      {review.photos.length
      && <div>
        {review.photos.map(photo => <Thumbnail key={photo.id} src={photo.url} />)}
      </div> }

      <div>Helpful? <SmallButton>Yes</SmallButton>({review.helpfulness}) | <SmallButton>Report</SmallButton></div>

    </TileStyle>
  );
}

const TileStyle = styled.div`
  border-bottom: 1px solid black;
  padding: 10px 0;
`

const SmallButton = styled.button`
  text-decoration: underline;
  border: none;
  background: none;
`

const ReviewTitle = styled.h5`
  font-size: 1.25rem;
`

const Thumbnail = styled.img`
  width: 150px;
`

export default Tile;
