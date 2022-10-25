import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ImageMagnifier from './ZoomView.jsx';
import {AiOutlineArrowRight, AiOutlineArrowLeft, AiOutlineExpand} from 'react-icons/ai';
import './overview.css';

const {useState, useEffect} = React;

const ExpandedView = ({currentStyle, handleExpansion, slideNumber, nextSlide, prevSlide, setSlideNumber}) => {
  // const [slideNumber, setSlideNumber] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  // const nextSlide = () => {
  //   setSlideNumber(slideNumber === currentStyle.photos.length - 1 ? 0 : slideNumber + 1);
  // };

  // const prevSlide = () => {
  //   setSlideNumber(slideNumber === 0 ? currentStyle.photos.length - 1 : slideNumber - 1);
  // };

  return (
    <div className='expanded-gallery'>
      {currentStyle.photos !== undefined && slideNumber !== 0 && !zoomed &&
      <AiOutlineArrowLeft className="expanded-left-arrow" onClick={prevSlide}/>
      }
      {currentStyle.photos !== undefined && slideNumber !== currentStyle.photos.length - 1 && !zoomed &&
      <AiOutlineArrowRight className="expanded-right-arrow" onClick={nextSlide}/>
      }
      <div className="expanded-thumbnails">
        {
          currentStyle.photos && !zoomed && currentStyle.photos.map((item, index) => {
            return (
              <div className="thumbnail-container" key={index}>
                <img
                  onClick={() => setSlideNumber(index)}
                  className={index === slideNumber ? 'thumbnail-active' : 'thumbnail'}
                  key={index}
                  src={item.url === null ? 'https://user-images.githubusercontent.com/10515204/56117400-9a911800-5f85-11e9-878b-3f998609a6c8.jpg': item.url}>
                </img>
              </div>
            );
          })
        }
      </div>
      {!zoomed &&
      <div><AiOutlineExpand className="expanded-expand-button" onClick={() => handleExpansion()}/></div>
      }
      {
        currentStyle.photos && !zoomed && currentStyle.photos.map((slide, index) => {
          return (
            <div className="expanded-image-container"
              key={index}>
              {index === slideNumber &&
              (<img key={index}
                onClick={() => setZoomed(!zoomed)}
                className='expanded-image'
                src={slide.url === null ? 'https://user-images.githubusercontent.com/10515204/56117400-9a911800-5f85-11e9-878b-3f998609a6c8.jpg' : slide.url} alt=''/>)}
            </div>
          );
        })
      }
      {
        zoomed !== false &&
        <div className='zoom-container'>
          <ImageMagnifier height='75.82575173477255vh' width='25.53125vw' src={currentStyle.photos[slideNumber].url} zoomed={zoomed} setZoomed={setZoomed}/>
        </div>
      }
    </div>
  );
};


export default ExpandedView;


// className={index === slideNumber ? 'slide active' : 'slide'}