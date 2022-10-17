import React, { useState, useEffect } from 'react';
import RelatedItems from './RelatedItems.jsx';
import styled from 'styled-components';
import { createStars, getAverage } from '../../Tools/createStars';


const RelatedItem = ({relatedItem, handleProductChange}) => {
  // console.log("related item in relatedItem line 7", relatedItem); //need this to access characteristics later
  const [currentStyle, setCurrentStyle] = useState({});
  const [currentPhotoURL, setCurrentPhotoURL] = useState('');
  const [regPrice, setRegPrice] = useState('');
  const [strikeRegPrice, setStrikeRegPrice] = useState('');
  const [salePrice, setSalePrice] = useState('');

  /** to set default style for card **/
  if (relatedItem) {
    var ratings = getAverage(relatedItem.ratings);
  }
  useEffect(() => {
    if (relatedItem && relatedItem.results.length > 0) {
      relatedItem.results.forEach((style) => {
        if (style['default?']) {
          setCurrentStyle(style);
        }
      })
    }
  }, []);

  /** to set default photo and default price for related items card **/
  useEffect(() => {
    // console.log('currentStyle id in useEffect line 29 in RelatedItem', currentStyle.id);
    if (currentStyle.photos) {
      currentStyle.photos.forEach((photo) => {
        setCurrentPhotoURL(photo.url);
      });
    } // need a response if no url is found
    if (currentStyle.sale_price) {
      setStrikeRegPrice(currentStyle.original_price);
      setSalePrice(currentStyle.sale_price)
    } else {
      setRegPrice(currentStyle.original_price);
    }
  }, [currentStyle]);

  // need action button to look better/be more accessible, and be functional => Compare modal
  // also if no reviews, this div should be hidden
  return (
    <RelatedItemListItem onClick={(event) => handleProductChange(relatedItem.id)}>
      <RelatedImageDiv><RelatedDefaultImage src={currentPhotoURL}/>
    <ActionButtonRelated></ActionButtonRelated></RelatedImageDiv>
      <h5>{relatedItem.category}</h5>
      <h4>{relatedItem.name}</h4>
      <Pricing salePrice={salePrice} regPrice={regPrice} strikePrice={strikeRegPrice} />
      <div>{createStars(ratings)}</div>
    </RelatedItemListItem>
  )
};

export default RelatedItem;

/** function for handling strikethrough proicing/ sale pricing/ regular pricing */
const Pricing = ({salePrice, regPrice, strikePrice}) => {
  if (salePrice) {
    return <SaleAndStrikeBlock><SalePricing>${salePrice}</SalePricing><StrikePricing>${strikePrice}</StrikePricing></SaleAndStrikeBlock>
  } else {
    return <div>${regPrice}</div>
  }
};

const RelatedItemListItem = styled.li` //the related items card itself
  display: inline-flex;

  // old good code
  display: inline-block;
  border-radius: 3px;
  margin: 5px;
  border: 2px solid blue;
  padding: 5px;

`

const RelatedImageDiv = styled.div` //the image div
//new carousel code

//old, good code
  position:relative; // so I can position the action button
  margin: 3px;
  height: 350px;
  width: 250px;
  word-wrap: normal;
`
const RelatedDefaultImage = styled.img` // image itself fits image div
  height: 100%;
  width: 100%;
  object-fit: cover;
`

const ActionButtonRelated = styled.button`
  background: white;
  border: 2px solid #f80;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 50%;
  //old good code below
  position:absolute;
  right: 6px;
  top: 6px;
  font-size: 30px;
  // background: none;
  // border: none;
  color: #f80;
  &::after {
    font-family: FontAwesome;
    content: "\\f005";
  }
`

const SaleAndStrikeBlock = styled.div`
  display: inline-block;
`

const SalePricing = styled.div`
  display: inline-flex;
  //good old code
  color: red;
  margin-right: 5px;
  // display: inline-block;
`

const StrikePricing = styled.div`
  display: inline-flex;
  //good old code
  text-decoration: line-through;
  // display: inline-block;
`