import React from 'react';
import axios from 'axios';

const {useState, useEffect} = React

const ProductInfo = () => {
  const [product, setProduct] = useState({});
  const [productStyles, setProductStyles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState({})

  useEffect(() => {
    axios.get('/products/40344')
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
    <div className="product-info">
      <div>Category</div>
      <div>{product.category}</div>
      <div>{product.name}</div>
      {productStyles.length > 0 &&
        <div>{productStyles[0].original_price}</div>
      }
    </div>
  )
}

export default ProductInfo;
