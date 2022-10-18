import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import OverviewApp from './Overview/OverviewApp.jsx';
import Ratings from './R&R/Ratings.jsx';
import RelatedItems from './RelatedItems/RelatedItems.jsx';
import QnA from './QnA/QnA.jsx';
import axios from 'axios';

const App = () => {
  const [product, setProduct] = useState({});
  const [productStyles, setProductStyles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState({});

  useEffect(() => {
    // axios.get('/products/40344')
    // axios.get('/products/40480') //has related items with sale price
    // axios.get('/products/40353')
    // 411197
    handleProductChange('40480');
  }, []);

  useEffect(() => {
    if (product.id) {
      axios.get(`/products/${product.id}/styles`)
        .then(res => setProductStyles(res.data.results))
        .catch(err => console.error(err));
    }
  }, [product]);

  useEffect(() => {
    if (productStyles.length > 0) {
      productStyles.forEach((style) => {
        if (style['default?']) {
          setCurrentStyle(style);
        }
      });
    }
  }, [productStyles]);

  let controller;
  const abortRelatedItemAsk = (event) => {
    if (controller) {
      controller.abort();
      console.log('download aborted');
    }
  };

  const handleProductChange = (productID, event) => { //this will be for related Items onClick handler.
    abortRelatedItemAsk(event); //aborts previous get request in case it is still running

    controller = new AbortController();

    axios.get(`/products/${productID}`, { signal: controller.signal })
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
  };

  // const handleProductChange = (productID) => { //this will be for related Items onClick handler.
  //   axios.get(`/products/${productID}`)
  //     .then(res => setProduct(res.data))
  //     .catch(err => console.error(err));
  // };

  const handleStyleChange = (styleID) => {
    productStyles.forEach((style) => {
      if (style.style_id === styleID) {
        setCurrentStyle(style);
      }
    });
  };

  return (
    <div>
      <OverviewApp product={product} productStyles={productStyles} currentStyle={currentStyle} handleStyleChange={handleStyleChange} />
      <RelatedItems product={product} productStyles={productStyles} handleProductChange={handleProductChange} />
      <Ratings productID={product.id} productName={product.name}/>
      <QnA product={product} />
    </div>

  );
};

export default App;