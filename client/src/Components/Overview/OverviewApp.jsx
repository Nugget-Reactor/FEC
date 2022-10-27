import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

import ProductInfo from './ProductInfo.jsx';
import ImageGallery from './ImageGallery.jsx';
import ProductDescription from './ProductDesc.jsx';
import { TrackerContext } from '../../Tools/clickTracker';

import './overview.css';


const { useState, useEffect, useContext } = React;


const OverviewApp = ({ product, productStyles, currentStyle, handleStyleChange, reviewRef }) => {
  const [expanded, setExpanded] = useState(false);
  const tracker = useContext(TrackerContext);

  const handleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="overview" onClick={e => tracker(e.target, 'Overview')}>
      <div className="gallery-container">
        <ImageGallery product={product} productStyles={productStyles} currentStyle={currentStyle} handleExpansion={handleExpansion} expanded={expanded}/>
        {!expanded &&
        <ProductInfo product={product} productStyles={productStyles} currentStyle={currentStyle} handleStyleChange={handleStyleChange} reviewRef={reviewRef} />
        }
      </div>
      <ProductDescription product={product}/>
    </div>
  );
};

export default OverviewApp;
