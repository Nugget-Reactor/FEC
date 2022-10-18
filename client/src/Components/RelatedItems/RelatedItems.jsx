import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RelatedItem from './RelatedItem.jsx';
import styled from 'styled-components';
import RelatedItemsCarousel from './RelatedItemsCarousel.jsx';

const RelatedItems = ({ product, handleProductChange }) => {
  const [characteristics, setCharacteristics] = useState([]);
  const [relatedItems, setRelatedItems] = useState([]);
  const [relatedPrices, setRelatedPrices] = useState([]);
  const [relatedImages, setRelatedImages] = useState([]);

  useEffect(() => {
    /**to get related item **/
    if (product.id) {
      axios.get(`/products/${product.id}/related`)
        .then((results) => {
          setRelatedItems(results.data);
        })
        .catch((err) => console.log('error', err));

      //to do for modal to get characteristics of current item from metadata if not passed down as props
      // axios.get(`/reviews/meta?product_id=${product.id}`) //actually want currentItem.id/related
      // .then((results) => {
      //   console.log('characteristics in Related Items', results);
      //   setRelatedItems(results.data);  //I want this to be an array of objects with all of the properties I want
      // })
      // .catch((err) => console.log('error', err));
    }
  }, [product]);


  return (
    <div id="related-items-panel">
      <h2>Related Items</h2>
      <Carousel>
        <RelatedItemsCarousel relatedItems={relatedItems} handleProductChange={handleProductChange}/>
      </Carousel>
    </div>
  );
};

export default RelatedItems;

const Carousel = styled.div`
  max-width: 95%;

`;