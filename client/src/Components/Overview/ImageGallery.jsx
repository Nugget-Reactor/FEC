import React from 'react';
import axios from 'axios';
import styled from "styled-components"
import {AiOutlineArrowRight, AiOutlineArrowLeft} from 'react-icons/ai';
import './overview.css'

const {useState, useEffect} = React

const ImageGallery = ({product, productStyles, currentStyle}) => {
  const [slideNumber, setSlideNumber] = useState(0)
  const [expanded, setExpanded] = useState(false);

  const nextSlide = () => {
    setSlideNumber(slideNumber === currentStyle.photos.length - 1 ? 0 : slideNumber + 1)
  }

  const prevSlide = () => {
    setSlideNumber(slideNumber === 0 ? currentStyle.photos.length - 1 : slideNumber - 1)
  }


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
            <img onClick={() => setSlideNumber(index)} className="thumbnail" src={item.thumbnail_url}></img>
          )
        })
      }
      </div>
      {
        currentStyle.photos && currentStyle.photos.map((slide, index) => {
          return (
            <div className={index === slideNumber ? 'slide active' : 'slide'} key={index}>
              {index === slideNumber && (<img className='image' src={slide.url} alt=''/>)}
            </div>
          )
        })
      }
    </div>
  )
}

40344
sku: 1394769

export default ImageGallery;


