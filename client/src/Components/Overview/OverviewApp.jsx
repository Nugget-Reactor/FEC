import React from 'react';
import ProductInfo from './ProductInfo.jsx'
import ImageGallery from './ImageGallery.jsx'
import styled from "styled-components"
import axios from 'axios';
const {useState, useEffect} = React

const OverviewApp = () => {

  const [product, setProduct] = useState({});
  const [productStyles, setProductStyles] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState({})

  useEffect(() => {
    axios.get('/products/40353')
      .then(res => setProduct(res.data))
      .catch(err => console.error(err))
  }, [])

  useEffect(() => {
    if (product.id) {
      axios.get(`/products/${product.id}/styles`)
      .then(res => setProductStyles(res.data.results))
      .catch(err => console.error(err))
    }
  }, [product])

  return (
    <OverViewContainer>
      <ImageGallery product={product} productStyles={productStyles}/>
      {/* <ProductInfo product={product} productStyles={productStyles}/> */}
    </OverViewContainer>
  )
}

export default OverviewApp

const OverViewContainer = styled.div`

`