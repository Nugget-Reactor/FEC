import React from 'react';
import ProductInfo from './ProductInfo.jsx';
import ImageGallery from './ImageGallery.jsx';
import styled from 'styled-components';
import axios from 'axios';
import './overview.css';
const { useState, useEffect } = React;

const OverviewApp = ({ product, productStyles, currentStyle, handleStyleChange }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="overview">
      <ImageGallery product={product} productStyles={productStyles} currentStyle={currentStyle} handleExpansion={handleExpansion} expanded={expanded}/>
      <ProductInfo product={product} productStyles={productStyles} currentStyle={currentStyle} handleStyleChange={handleStyleChange} />
    </div>
  );
};

export default OverviewApp;

const OverViewContainer = styled.div`

`;