import React from 'react';
import './overview.css';

const {useState, useEffect} = React;

const ProductDescription = ({product, expanded}) => {
  return (
    <div className={!expanded ? 'product-desc-container' : 'product-desc-container-expanded'} >
      <p style={{fontWeight: 'bold'}}>{product.slogan}</p>
      <p>{product.description}</p>
    </div>


  );
};

export default ProductDescription;



