import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import {getAverage, createStars} from '../../Tools/createStars';

const {useState, useEffect} = React;

const ProductInfo = ({product, productStyles, currentStyle, handleStyleChange}) => {
  const [productRatings, setProductRatings] = useState({});

  useEffect(() => {
    if (product.id) {
      axios.get(`/reviews/meta`)
        .then(res => {
          console.log('look here', res.data);
        });
    }

  }, [product]);

  return (
    <div className="product-info-container">
      <span>{createStars(getAverage(productRatings))}</span>
    </div>
  );
};

export default ProductInfo;


