import React, { useState } from 'react';
import axios from 'axios';
import { format, parseISO } from 'date-fns';
import styled from 'styled-components';
import { createStars } from '../../Tools/createStars';
import Modal from './Modal.jsx';

const Tile = ({ review }) => {
  const [showImgModal, setShowImgModal] = useState(false);
  const [currentImage, setCurrentImage] = useState('');
  const [showMore, setShowMore] = useState(false);
  const [alreadyVoted, setAlreadyVoted] = useState(false);
  const [alreadyReported, setAlreadyReported] = useState(false);
  const handleImgModal = (link) => {
    setCurrentImage(link);
    setShowImgModal(true);
  }
  const closeImgModal = () => {
    setShowImgModal(false);
  }
  const shortenBody = () => {
    if(!showMore && review.body.length > 250) {
      return review.body.substring(0, 250) + '...';
    }
    return review.body;
  }
  const voteHelpful = () => {
    axios.put(`/reviews/${review.review_id}/helpful`)
    .then((result) => {
      setAlreadyVoted(true);
    })
    .catch(err => console.error(err));
  }
  const report = () => {
    axios.put(`/reviews/${review.review_id}/report`)
    .then(result => {
      setAlreadyReported(true);
    })
    .catch(err => console.error(err));
  }
  return(
    <TileStyle>
      <ReviewHeader>
        <span>{createStars(review.rating)}</span>
        <span>{review.reviewer_name}, {format(parseISO(review.date), 'MMMM d, yyyy')}</span>
      </ReviewHeader>
      <ReviewTitle>{review.summary}</ReviewTitle>
      <ReviewBody>
        {shortenBody()}
        {!showMore && review.body.length > 250 ? <SmallButton onClick={()=>setShowMore(true)} color="blue">Show More</SmallButton>
        : null}
      </ReviewBody>
      {review.recommend ? <div><i className="fa-solid fa-check"/> I recommend this product!</div> : null}
      {review.response
      ? <SellerResponse>
        <BoldText>Response from seller:</BoldText>
        <div>{review.response}</div>
      </SellerResponse>
      : null}

      {review.photos.length > 0
      && <div>
        {review.photos.map(photo => {
        return <Thumbnail key={photo.id} imgLink={photo.url} onClick={()=>handleImgModal(photo.url)} />})}
      </div> }
      {showImgModal
      ? <Modal closeModal={closeImgModal}>
        <ModalImg src={currentImage} />
      </Modal>
      : null}


      <InteractiveSpace>
        {!alreadyVoted
        ? <span>Helpful? <SmallButton onClick={voteHelpful}>Yes</SmallButton>({review.helpfulness})</span>
        : <ThanksMessage><i className="fa-solid fa-check"/> Thank you for your feedback!</ThanksMessage>}
        |
        {!alreadyReported
        ? <SmallButton onClick={report}>Report</SmallButton>
        : <span>This review has been reported.</span>}
      </InteractiveSpace>

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
  font-size: inherit;
  color: ${props=>props.color};
  cursor: pointer;
`
const ReviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
`
const ReviewTitle = styled.h5`
  font-size: 1.25rem;
`

const ReviewBody = styled.p`
  word-break: break-word;
`
const SellerResponse = styled.div`
  background-color: lightgrey;
  padding: 15px;
  margin 10px 0;
`
const BoldText = styled.div`
  font-weight: 600;
  margin-bottom: 10px;
`
const ModalImg = styled.img`
  max-width: 70%;
  max-height: 90%;
`
const Thumbnail = styled.a`
  display: inline-block;
  width: 100px;
  height: 100px;
  background-image: url(${props => props.imgLink});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  margin-right: 2px;
`
const InteractiveSpace = styled.div`
  font-size:1rem;
  margin: 2px 0;
`
const ThanksMessage = styled.span`
  color:green;

`

export default Tile;
