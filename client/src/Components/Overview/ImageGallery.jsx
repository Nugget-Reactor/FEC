import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai';
import DefaultImageView from './DefaultImgView.jsx';
import ExpandedView from './ExpandedView.jsx';
import ZoomView from './ZoomView.jsx';
import './overview.css';

const {useState, useEffect} = React;

const ImageGallery = ({currentStyle, expanded, handleExpansion}) => {
  const [slideNumber, setSlideNumber] = useState(0);

  const nextSlide = () => {
    setSlideNumber(slideNumber === currentStyle.photos.length - 1 ? 0 : slideNumber + 1);
  };

  const prevSlide = () => {
    setSlideNumber(slideNumber === 0 ? currentStyle.photos.length - 1 : slideNumber - 1);
  };

  return (
    <div className='gallery'>
      {!expanded &&
        <DefaultImageView currentStyle={currentStyle} handleExpansion={handleExpansion} slideNumber={slideNumber} nextSlide={nextSlide} prevSlide={prevSlide} setSlideNumber={setSlideNumber}/>
      }
      {
        expanded &&
        <ExpandedView currentStyle={currentStyle} handleExpansion={handleExpansion} slideNumber={slideNumber} nextSlide={nextSlide} prevSlide={prevSlide} setSlideNumber={setSlideNumber}/>
      }
    </div>
  );
};

export default ImageGallery;



