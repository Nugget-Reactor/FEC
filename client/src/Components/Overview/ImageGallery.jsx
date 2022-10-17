import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai';
import DefaultImageView from './DefaultImgView.jsx';
import './overview.css';

const {useState, useEffect} = React;

const ImageGallery = ({product, productStyles, currentStyle}) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [expanded, setExpanded] = useState(false);


  const handleExpansion = () => {
    setExpanded(!expanded);
  };


  return (
    <div className='gallery'>
      {!expanded &&
        <DefaultImageView product={product} productStyles={productStyles} currentStyle={currentStyle} handleExpansion={handleExpansion}/>
      }
      {
        expanded &&
        <h1 onClick={() => handleExpansion()}>Expanded View</h1>
      }
    </div>
  );
};

export default ImageGallery;



