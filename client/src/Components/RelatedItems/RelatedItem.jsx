import React, { useState, useEffect } from 'react';
import RelatedItems from './RelatedItems.jsx';
import styled from 'styled-components';
import { createStars, getAverage } from '../../Tools/createStars';

const RelatedItem = ({relatedItem}) => {
  // console.log("related item in relatedItem line 7", relatedItem.ratings);
  const [currentStyle, setCurrentStyle] = useState({});
  const [currentPhotoURL, setCurrentPhotoURL] = useState('');
  const [regPrice, setRegPrice] = ('');
  const [salePrice, setSalePrice] = ('');

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
      //will need pricing state here

    }
  }, [currentStyle]);

// console.log('currentStyle in relatedItem mapped item', currentStyle);
// console.log('currentStyle photos in relatedItem mapped item', currentStyle.ratings);


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

