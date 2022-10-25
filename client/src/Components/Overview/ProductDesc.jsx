import React from 'react';
import './overview.css';

const {useState, useEffect} = React;

const ProductDescription = ({product}) => {
  return (
    <div className='product-desc-container'>
      <p>{product.slogan}</p>
      <p>{product.description}</p>
    </div>


  );
};

export default ProductDescription;



