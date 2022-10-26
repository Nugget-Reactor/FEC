/* eslint-disable camelcase */
import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import './overview.css';
const { useState, useEffect } = React;


const AddCart = ({ currentStyle }) => {
  const [currentSku, setCurrentSku] = useState({ sku_id: '', quantity: 0 });
  const [currentQuantity, setCurrentQuantity] = useState(0);
  const [message, setMessage] = useState(false);
  const availableSkus = [];
  const currentSkus = currentStyle.skus;
  const itterate = Array.from({ length: 15 }, (v, k) => k + 1);


  for (const key in currentSkus) {
    if (key !== 'null' && currentSkus[key].quantity !== 0) {
      availableSkus.push(
        { skuID: key, quantity: currentSkus[key].quantity, size: currentSkus[key].size }
      );
    }
  }

  useEffect(() => {
    handleSkuChange('Select Size');
  }, [currentStyle]);

  const handleSkuChange = (skuID) => {
    if (skuID === 'Select Size') {
      setCurrentSku({ sku_id: '', quantity: 0 });
    } else {
      setCurrentQuantity(1);
      setMessage(false);
    }
    availableSkus.forEach(sku => {
      if (sku.skuID === skuID) {
        setCurrentSku({ sku_id: sku.skuID, quantity: sku.quantity });
      }
    });
  };

  const addToCart = () => {
    if (currentSku.sku_id && currentQuantity > 0) {
      axios.post('/cart', { sku_id: currentSku.sku_id });
    } else {
      setMessage(true);
    }
  };


  return (
    <div className="selectors-container">
      {message ? <p style={{color: 'red', marginBottom: 0, paddingBottom: 0}}>Please select a size</p> : null}
      <select className="size-selector"
        onChange={(e) => handleSkuChange(e.target.value)}>
        <option defaultValue="none">Select Size</option>
        {availableSkus.map(sku => {
          return <option key={sku.skuID} value={sku.skuID}>{sku.size}</option>;
        })}
      </select>
      <select className="quantity-selector"
        onChange={(e) => setCurrentQuantity(e.target.value)}>
        {currentSku.sku_id !== '' ?
          <option defaultValue={1}>1</option> :
          <option defaultValue="none">-</option>}
        {(itterate.slice(1, currentSku.quantity)).map((number, index) => {
          return <option value={number} key={index}>{number}</option>;
        })}
      </select>
      <div>
        <button className='add-cart-button'type="submit" onClick={() => addToCart()}>Add To Cart</button>
      </div>

    </div>
  );
};

export default AddCart;
