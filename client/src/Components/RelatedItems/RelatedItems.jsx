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
          var arrayOfRelatedIds = []; //attempting to eliminate duplicate related items and undefined items
          for (var i = 0; i < results.data.length; i++) {
            // if ()
            arrayOfRelatedIds.push(results.data[i].id);
          }
          console.log('array of related ids in relatedItems.jsx line 21', arrayOfRelatedIds); //sometimes these come back undefined and cause errors
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
      <AttemptCarousel>
        <RelatedItemsCarousel relatedItems={relatedItems}/>
      </AttemptCarousel>
      <Carousel>
        <RelatedItemsList>
          {relatedItems.map((relatedItem) =>
            <RelatedItem relatedItem={relatedItem} handleProductChange={handleProductChange} key={relatedItem.id} />)}
        </RelatedItemsList>
      </Carousel>


    </div>
  );
};

export default RelatedItems;

const AttemptCarousel = styled.div`
maxWidth: 1200;
marginLeft: 'auto';
marginRight: 'auto';
marginTop: 64;
`;

const RelatedItemsList = styled.ul`

  // new carousel first
  display: flex;

  box-sizing: border-box;
  border: 2px solid red;
  max-height: 30em;
  overflow: auto;
  max-width: 100%;
  // old, good code
  // display: inline-block;
  border-radius: 3px;
  // border: 2px solid black;
  padding: 0.5rem 0;
`;

const Carousel = styled.div`
  // max-width: 95%;
  overflow: auto;
  border: 2px solid green;

`;