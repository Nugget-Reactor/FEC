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
    //will need pricing state here
  }, [currentStyle]);

  // console.log('salePrice in relatedItem mapped item', salePrice);
  // console.log('salePrice in relatedItem mapped item', strikeRegPrice);
  // console.log('salePrice in relatedItem mapped item', regPrice);

console.log('currentStyle photos in relatedItem mapped item', currentStyle);


  return (
    <div>
      <img src={currentPhotoURL}/>
      <div className="item-category">{relatedItem.category}</div>
      <div className="item-name">{relatedItem.name}</div>
      <div className="item-price">{relatedItem.default_price}</div>
      <div>{createStars(ratings)}</div>
      <div className="reviews"></div>
    </div>
  )
}

export default RelatedItem;

