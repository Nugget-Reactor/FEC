import React from 'react';
import axios from 'axios';

const {useState, useEffect} = React

const ProductInfo = () => {
  const [product, setProduct] = useState([]);
  const [productReviews, setProductReviews] = ([]);

  useEffect(() => {
    axios.get('./products')
      .then(res => setProduct(res.data[0]))
      .catch(err => console.error(err))
  }, [])

  return (
    <div>
      <ul>
        <li>{product.name}</li>
        <li>{product.slogan}</li>
        <li>{product.description}</li>
        <li>{product.default_price}</li>
      </ul>
    </div>
  )
}

export default ProductInfo;