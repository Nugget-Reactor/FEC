import React, { useState, useEffect } from 'react';
import RelatedItems from './RelatedItems.jsx';
import styled from 'styled-components';

const RelatedItem = ({relatedItem}) => {
console.log('item in relatedItem mapped item', relatedItem)
  //make onclick for card itself

  return (
    <div>
      <img src="https://images.halloweencostumes.com/products/77143/1-1/kids-chicken-nugget-costume.jpg" width="100px" height="150px"/>
      <div className="item-category">{relatedItem.category}</div>
      <div className="item-name">{relatedItem.name}</div>
      <div className="item-price">{relatedItem.default_price}</div>
      <div className="reviews"></div>
    </div>
  )
}

export default RelatedItem;