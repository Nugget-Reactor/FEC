import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {AiOutlineArrowRight, AiOutlineArrowLeft, AiOutlineExpand} from 'react-icons/ai';
import './overview.css';

const {useState, useEffect, useRef} = React;

const DefaultImageView = ({currentStyle, handleExpansion, slideNumber, nextSlide, prevSlide, setSlideNumber}) => {
  const thumbnailRef = useRef(null);

  // useEffect(() => {
  //   if (thumbnailRef !== null) {
  //     thumbnailRef.current.scrollIntoView({behavior: 'smooth'});
  //   }
  // }, [slideNumber]);

  return (
    <div className='gallery'>
      {currentStyle.photos !== undefined && slideNumber !== 0 &&
      <AiOutlineArrowLeft className="left-arrow" onClick={prevSlide}/>
      }
      {currentStyle.photos !== undefined && slideNumber !== currentStyle.photos.length - 1 &&
      <AiOutlineArrowRight className="right-arrow" onClick={nextSlide}/>
      }
      <div className="thumbnails">
        {
          currentStyle.photos && currentStyle.photos.map((item, index) => {
            return (
              <div className="thumbnail-container"
                key={index}>
                <img onClick={() => setSlideNumber(index)}
                  className={index === slideNumber ? 'thumbnail-active' : 'thumbnail'}
                  key={index}
                  src={item.url === null ? 'https://user-images.githubusercontent.com/10515204/56117400-9a911800-5f85-11e9-878b-3f998609a6c8.jpg': item.url} alt='product thumbnail'>
                </img>
              </div>
            );
          })
        }
      </div>
      <div><AiOutlineExpand className="expand-button" onClick={() => handleExpansion()}/></div>
      {
        currentStyle.photos && currentStyle.photos.map((slide, index) => {
          return (
            <div key={index}>
              {index === slideNumber &&
              (<img key={index}
                onClick={() => handleExpansion()}
                className='image'
                src={slide.url === null ? 'https://user-images.githubusercontent.com/10515204/56117400-9a911800-5f85-11e9-878b-3f998609a6c8.jpg' : slide.url} alt='product image'/>)}
            </div>
          );
        })
      }
    </div>
  );
};


export default DefaultImageView;


// className={index === slideNumber ? 'slide active' : 'slide'}