import React, { useState, useEffect } from 'react';
import RelatedItems from './RelatedItems.jsx';
import styled from 'styled-components';
import { createStars, getAverage } from '../../Tools/createStars';
import '@fortawesome/fontawesome-free/css/all.min.css';


const RelatedItem = ({relatedItem, handleProductChange}) => {
  // console.log("related item in relatedItem line 7", relatedItem);
  const [currentStyle, setCurrentStyle] = useState({});
  const [currentPhotoURL, setCurrentPhotoURL] = useState('');
  const [regPrice, setRegPrice] = useState('');
  const [strikeRegPrice, setStrikeRegPrice] = useState('');
  const [salePrice, setSalePrice] = useState('');

  /** to set default style for card **/
  var ratings = getAverage(relatedItem.ratings);
  useEffect(() => {
    if (relatedItem.results.length > 0) {
      relatedItem.results.forEach((style) => {
        if (style['default?']) {
          setCurrentStyle(style);
        }
      })
    }
  }, []);

  /** to set default photo and default price for related items card **/
  useEffect(() => {
    if (currentStyle.photos) {
      currentStyle.photos.forEach((url) => {
        setCurrentPhotoURL(url.thumbnail_url);
      });
    }
    if (currentStyle.sale_price) {
      setStrikeRegPrice(currentStyle.original_price);
      setSalePrice(currentStyle.sale_price)
    } else {
      setRegPrice(currentStyle.original_price);
    }
  }, [currentStyle]);

  // need action button to look better and be functional => Compare modal
  // also if no reviews, no star div
  return (
    <RelatedItemListItem onClick={(event) => handleProductChange(relatedItem.id)}>
      <RelatedImageDiv><RelatedDefaultImage src={currentPhotoURL}/>
        <ActionButtonRelatedIcon><ActionButtonRelated></ActionButtonRelated></ActionButtonRelatedIcon></RelatedImageDiv>
      <h5>{relatedItem.category}</h5>
      <h4>{relatedItem.name}</h4>
      <Pricing salePrice={salePrice} regPrice={regPrice} strikePrice={strikeRegPrice} />
      <div>{createStars(ratings)}</div>
    </RelatedItemListItem>
  )
};

export default RelatedItem;

const Pricing = ({salePrice, regPrice, strikePrice}) => {
  if (salePrice) {
    return <SaleAndStrikeBlock><SalePricing>${salePrice}</SalePricing><StrikePricing>${strikePrice}</StrikePricing></SaleAndStrikeBlock>
  } else {
    return <div>${regPrice}</div>
  }
};

const RelatedImageDiv = styled.div`
  position:relative;
  margin: 3px;
  text-align: center;
  height: 400px;
  width: 250px;
  word-wrap: normal;
`
const ActionButtonRelated = styled.button`
  position:absolute;
  right: 6px;
  top: 6px;
  font-size: 30px;
  background: none;
  border: none;
  color: #f80;
  &::after {
    font-family: FontAwesome;
    content: "\\f005";
  }
`
const ActionButtonRelatedIcon = styled.button`
  position:absolute;
  font-size: 41px;
  right: 0;
  top: 0;
  background: none;
  border: none;
  color: #000;
  &::after {
    font-family: FontAwesome;
    content: "\\f005";
  }
`

const RelatedDefaultImage = styled.img`
height: 100%;
width: 100%;
object-fit: cover;
`

const RelatedItemListItem = styled.li`
display: inline-block;
border-radius: 3px;
margin: 5px;
border: 2px solid black;
padding: 5px;
`

const SaleAndStrikeBlock = styled.div`
// display: inline;
display: inline-block;
`

const SalePricing = styled.div`
color: red;
margin-right: 5px;
display: inline-block;
`

const StrikePricing = styled.div`
text-decoration: line-through;
display: inline-block;
`