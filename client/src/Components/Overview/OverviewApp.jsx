import React from 'react';
import ProductInfo from './ProductInfo.jsx';
import ImageGallery from './ImageGallery.jsx';
import ProductDescription from './ProductDesc.jsx';
import styled from 'styled-components';
import axios from 'axios';
import './overview.css';
const { useState, useEffect } = React;

const OverviewApp = ({ product, productStyles, currentStyle, handleStyleChange, reviewRef }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="overview">
      <ImageGallery product={product} productStyles={productStyles} currentStyle={currentStyle} handleExpansion={handleExpansion} expanded={expanded}/>
      {!expanded &&
       <ProductInfo product={product} productStyles={productStyles} currentStyle={currentStyle} handleStyleChange={handleStyleChange} reviewRef={reviewRef} />
      }
      <div className='break'></div>
      <ProductDescription product={product}/>
    </div>
  );
};

export default OverviewApp;
