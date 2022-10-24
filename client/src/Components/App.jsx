import React, { useState, useEffect, useContext } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import OverviewApp from './Overview/OverviewApp.jsx';
import Reviews from './R&R/Reviews.jsx';
import RelatedItems from './RelatedItems/RelatedItems.jsx';
import OutfitCollection from './RelatedItems/OutfitCollection.jsx';
import QnA from './QnA/QnA.jsx';
import axios from 'axios';
import { createStars, getAverage } from '../Tools/createStars';

const App = () => {
  const [product, setProduct] = useState({});
  const [productName, setProductName] = useState('');
  const [productStyles, setProductStyles] = useState([]);
  const [currentStyle, setCurrentStyle] = useState({});
  const [currentOutfitStyle, setCurrentOutfitStyle] = useState({});
  const [currentMeta, setCurrentMeta] = useState({});
  const [currentRatings, setCurrentRatings] = useState({});
  const [currentOutfit, setCurrentOutfit] = useState({});
  const [allOutfits, setAllOutfits] = useState([]);

  useEffect(() => {
    // handleProductChange('40353'); //infinity stones
    // handleProductChange('40351'); //infinity stones in related items
    // handleProductChange('40566');
    // handleProductChange('40649'); //40345
    handleProductChange('40348'); // contains some items with no image and no price - also 3 from infinity stones
    // handleProductChange('41197');
    // handleProductChange('40480');
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

      setProductName(product.name);
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
    var outfitIDs = [];
    if (window.localStorage.outfits) {
      windowOutfits = JSON.parse(window.localStorage.getItem('outfits'));
      setAllOutfits(windowOutfits); //sets allOutfits for use later
      for (var i = 0; i < windowOutfits.length; i++) {
        outfitIDs.push(windowOutfits[i].id); //to get the id to be sure there are no duplicates
      }
    } else {
      windowOutfits = [];
    }

    if (Object.keys(currentOutfit).length > 0 && !outfitIDs.includes(currentOutfit.id)) {
      windowOutfits.push(currentOutfit);
      setAllOutfits(windowOutfits); //adds item to outfit Array
      window.localStorage.setItem('outfits', JSON.stringify(windowOutfits));
    } else {
      console.log('not added!');
    }
  }, [currentOutfit]);

  /** product constructor for outfits module */
  const addOutfit = () => {
    var currentProduct = {};
    currentProduct.id = product.id;
    currentProduct.regPrice = currentOutfitStyle.original_price;
    currentProduct.salePrice = currentOutfitStyle.sale_price;
    currentProduct.ratings = getAverage(currentRatings); //children do not like stars
    currentProduct.name = product.name;
    currentProduct.category = product.category;
    currentProduct.currentPhotoURL = currentOutfitStyle.photos[0].url;
    setCurrentOutfit(currentProduct);
  };

  const removeOutfit = (productID) => {
    var [...copyOfFits] = allOutfits;
    copyOfFits.forEach((windowFit, index) => {
      if (windowFit.id === productID) {
        copyOfFits.splice(index, 1);
      }
    });
    window.localStorage.setItem('outfits', JSON.stringify(copyOfFits)); //changes localStorage -> sets window data
    setAllOutfits(copyOfFits); //this is little more than an alert to tell the carousel to get the window data
  };

  return (
    <div>
      <OverviewApp product={product} productStyles={productStyles} currentStyle={currentStyle} handleStyleChange={handleStyleChange} />
      <RelatedItems product={product} productStyles={productStyles} handleProductChange={handleProductChange} currentMeta={currentMeta} productName={productName}/>
      <OutfitCollection handleProductChange={handleProductChange} addOutfit={addOutfit} allOutfits={allOutfits} removeOutfit={removeOutfit}/>
      <Reviews productID={product.id} productName={product.name} />
      <QnA product={product} />
    </div>
  );
};

export default App;