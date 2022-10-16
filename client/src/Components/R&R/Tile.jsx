import React from 'react';
import { format, parseISO } from 'date-fns';
import styled from 'styled-components';
import { createStars } from '../../Tools/createStars';

const Tile = ({ review }) => {

  return(
    <TileStyle>

      <div>{createStars(review.rating)} <span>{review.reviewer_name}, {format(parseISO(review.date), 'MMMM d, yyyy')}</span></div>
      <ReviewTitle>{review.summary}</ReviewTitle>
      <ReviewBody>{review.body}</ReviewBody>
      {review.recommend && <div>I recommend this product!</div>}
      {review.response && <div>{review.reponse}</div>}

      {review.photos.length
      && <div>
        {review.photos.map(photo => <Thumbnail key={photo.id} imgLink={photo.url}  />)}
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

const ReviewBody = styled.p`
  word-break: break-word;
`

const Thumbnail = styled.a`
  display: inline-block;
  width: 100px;
  height: 100px;
  background-image: url(${props => props.imgLink});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  margin-right: 2px;
`

export default Tile;
