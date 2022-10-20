import React, { useState, useEffect, useContext } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import OverviewApp from './Overview/OverviewApp.jsx';
import Reviews from './R&R/Reviews.jsx';
import RelatedItems from './RelatedItems/RelatedItems.jsx';
import Outfits from './RelatedItems/Outfits.jsx';
import QnA from './QnA/QnA.jsx';
import axios from 'axios';
import { createStars, getAverage } from '../Tools/createStars';

const App = () => {
  const [product, setProduct] = useState({});
  const [productStyles, setProductStyles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState({});
  const [currentOutfitStyle, setCurrentOutfitStyle] = useState({});
  const [currentMeta, setCurrentMeta] = useState({});
  const [currentRatings, setCurrentRatings] = useState({});
  const [currentOutfit, setCurrentOutfit] = useState({});

  useEffect(() => {
    // axios.get('/products/40344')
    // axios.get('/products/40480') //has related items with sale price
    // axios.get('/products/40353')
    // handleProductChange('40353'); //infinity stones
    // handleProductChange('41197');
    handleProductChange('40480');
    // handleProductChange('40345'); // contains some items with no image and no price
    // handleProductChange('40344');

  }, []);

  useEffect(() => {
    if (product.id) {
      axios.get(`/products/${product.id}/styles`) //makes styles available
        .then(res => setProductStyles(res.data.results))
        .catch(err => console.error(err));

      axios.get(`/reviews/meta?product_id=${product.id}`) //makes metadata available
        .then(res => {
          setCurrentMeta(res.data); //sets metadata for current product(if needed)
          setCurrentRatings(res.data.ratings); //sets ratings for current product(definitely needed)
        })
        .catch(err => console.error(err));
    }

  }, [product]);

  useEffect(() => { // edited to make useful for Outfit module, to enable capture of default price and photo OR 1st style's info if no default
    var defaultStyle = false;
    if (productStyles.length > 0) {
      productStyles.forEach((style) => {
        if (style['default?']) {
          setCurrentStyle(style);
          setCurrentOutfitStyle(style);
          defaultStyle = true;
          // console.log('style line 49', style);
        }
      });
      if (!defaultStyle) {
        setCurrentOutfitStyle(productStyles[0]); //hopefully there are always styles
      }
    }
  }, [productStyles]);

  let controller;
  const abortRelatedItemAsk = () => {
    if (controller) {
      controller.abort();
      console.log('download aborted');
    }
  };

  const handleProductChange = (productID) => { //this will be for related Items onClick handler.
    abortRelatedItemAsk(); //aborts previous get request in case it is still running
    controller = new AbortController();
    axios.get(`/products/${productID}`, { signal: controller.signal })
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));
  };

  const handleStyleChange = (styleID) => {
    productStyles.forEach((style) => {
      if (style.style_id === styleID) {
        setCurrentStyle(style);
      }
    });
  };

  useEffect(() => { //to set outfits on localStorage - it should be an array, but we willl be adding one outfit at a time.
    var windowOutfits;
    if (window.localStorage.outfits) {
      windowOutfits = JSON.parse(window.localStorage.getItem('outfits'));
    } else {
      windowOutfits = [];
    }
    if (Object.keys(currentOutfit).length > 0) {
      windowOutfits.push(currentOutfit);
      window.localStorage.setItem('outfits', JSON.stringify(windowOutfits));
    }
  }, [currentOutfit]);

  const addOutfit = () => {
    var currentProduct = {};
    currentProduct.id = product.id;
    currentProduct.regPrice = currentOutfitStyle.original_price;
    currentProduct.salePrice = currentOutfitStyle.sale_price;
    currentProduct.stars = createStars(getAverage(currentRatings));
    currentProduct.name = product.name;
    currentProduct.category = product.category;
    currentProduct.currentPhotoURL = currentOutfitStyle.photos[0].url;
    setCurrentOutfit(currentProduct);
    console.log('currentProduct', currentProduct);
  };
  /** product constructor  for outfits module can I do this inside of Overview so we do not duplicate the efforts?*/

  return (
    <div>
      <OverviewApp product={product} productStyles={productStyles} currentStyle={currentStyle} handleStyleChange={handleStyleChange} />
      <RelatedItems product={product} productStyles={productStyles} handleProductChange={handleProductChange} />
      <Outfits handleProductChange={handleProductChange} addOutfit={addOutfit}/>
      <Reviews productID={product.id} productName={product.name} />
      <QnA product={product} />
    </div>
  );
};

export default App;