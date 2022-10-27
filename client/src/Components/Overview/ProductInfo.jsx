import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import StyleSelector from './StyleSelector.jsx';
import AddCart from './AddCart.jsx';
import { getAverage, createStars } from '../../Tools/createStars';

const { useState, useEffect } = React;

const ProductInfo = ({ product, productStyles, currentStyle, handleStyleChange, reviewRef}) => {
  const [productRatings, setProductRatings] = useState({});

  useEffect(() => {
    if (product.id !== undefined) {
      axios.get(`/reviews/meta?product_id=${product.id}`)
        .then(res => {
          setProductRatings(res.data.ratings);
        })
        .catch(err => console.error(err));
    }
  }, [product]);


  return (
    <div className="product-info-container">
      <span>{createStars(getAverage(productRatings))}
        &nbsp;<span style={{cursor: 'pointer', textDecoration: 'underline'}} onClick={() => reviewRef.current.scrollIntoView({behavior: 'smooth'})}>Read all reviews</span>
      </span>
      <p className="product-category">{product.category}</p>
      <h1 className="product-name" style={{fontWeight: "600"}}>{product.name}</h1>
      {currentStyle.sale_price !== null ?
        <p style={{ color: 'red' }}>${currentStyle.sale_price}&nbsp;
          <span style={{ color: 'black', textDecoration: 'line-through' }}>${currentStyle.original_price}</span>
        </p> :
        <p>${currentStyle.original_price}</p>}
      <StyleSelector productStyles={productStyles} handleStyleChange={handleStyleChange} currentStyle={currentStyle} />
      <div className='break'></div>
      <div>
        <AddCart currentStyle={currentStyle} />
      </div>
    </div>

  );
};

export default ProductInfo;


