import React from 'react';
import axios from 'axios';
import styled from "styled-components"

const {useState, useEffect} = React

const ImageGallery = ({product, productStyles}) => {

  return (
   <div>
    {console.log('styles', productStyles)}
    {productStyles.length > 0 &&
    <img src={productStyles[0].photos[0].url} width ="772px" height="auto"></img>
    }
   </div>
  )
}

export default ImageGallery;


