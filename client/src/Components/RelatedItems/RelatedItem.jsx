import React, { useState, useEffect } from 'react';
import RelatedItems from './RelatedItems.jsx';
import styled from 'styled-components';
import { createStars, getAverage } from '../../Tools/createStars';

const RelatedItem = ({relatedItem}) => {
  // console.log("related item in relatedItem line 7", relatedItem);
  const [currentStyle, setCurrentStyle] = useState({});
  const [currentPhotoURL, setCurrentPhotoURL] = useState('');
  const [regPrice, setRegPrice] = useState('');
  const [strikeRegPrice, setStrikeRegPrice] = useState('');
  const [salePrice, setSalePrice] = useState('');

// console.log('item in relatedItem mapped item', relatedItem)
  //make onclick for card itself
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

  useEffect(() => {
    if (currentStyle.photos) {
      currentStyle.photos.forEach((url) => { //set photo url to default photo
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


  // const RenderPrices = () => {
  //  {salePrice} ? <salePricing>${salePrice}</salePricing><strikePricing>${strikeRegPrice}</strikePricing> :
  //    <div>${regPrice}</div>;
  // }

// need action buttons and longer description

  return (
    <RelatedItemListItem>
      <RelatedImageDefault src={currentPhotoURL}/>
      <div className="item-category">{relatedItem.category}</div>
      <div className="item-name">{relatedItem.name}</div>
      <div className="item-price">${relatedItem.default_price}</div>
      <div>{createStars(ratings)}</div>
      <div className="reviews"></div>
    </RelatedItemListItem>
  )
};

export default RelatedItem;

// const
// const strikePrice = styled.
const RelatedImageDefault = styled.img`
height: 300px;
width: auto;
`

const RelatedItemListItem = styled.li`
display: inline-block;
border-radius: 3px;
margin: 2px;
border: 2px solid black;
padding: 0.5rem 0;
`

const salePricing = styled.div`
color: red;
`

const strikePricing = styled.div`
text:decoration: line-through;
`