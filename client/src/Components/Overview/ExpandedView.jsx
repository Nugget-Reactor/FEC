import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ZoomView from './ZoomView.jsx';
import ImageMagnifier from './ZoomView.jsx';
import {AiOutlineArrowRight, AiOutlineArrowLeft, AiOutlineExpand} from 'react-icons/ai';
import './overview.css';

const {useState, useEffect} = React;

const ExpandedView = ({currentStyle, handleExpansion}) => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  const nextSlide = () => {
    setSlideNumber(slideNumber === currentStyle.photos.length - 1 ? 0 : slideNumber + 1);
  };

  const prevSlide = () => {
    setSlideNumber(slideNumber === 0 ? currentStyle.photos.length - 1 : slideNumber - 1);
  };

  return (
    <div className='expanded-gallery'>
      {currentStyle.photos !== undefined && slideNumber !== 0 &&
      <AiOutlineArrowLeft className="expanded-left-arrow" onClick={prevSlide}/>
      }
      {currentStyle.photos !== undefined && slideNumber !== currentStyle.photos.length - 1 &&
      <AiOutlineArrowRight className="expanded-right-arrow" onClick={nextSlide}/>
      }
      <div className="expanded-thumbnails">
        {
          currentStyle.photos && currentStyle.photos.map((item, index) => {
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
      <div><AiOutlineExpand className="expanded-expand-button" onClick={() => handleExpansion()}/></div>
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
        <ImageMagnifier width='937' height='750' src="https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80"/>
      }
    </div>
  );
};


export default ExpandedView;


// className={index === slideNumber ? 'slide active' : 'slide'}