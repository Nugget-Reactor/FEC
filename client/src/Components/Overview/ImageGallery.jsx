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

  return (
    <div className='gallery'>
      {!expanded &&
        <DefaultImageView currentStyle={currentStyle} handleExpansion={handleExpansion}/>
      }
      {
        expanded &&
        <ExpandedView currentStyle={currentStyle} handleExpansion={handleExpansion}/>
      }
    </div>
  );
};

export default ImageGallery;



