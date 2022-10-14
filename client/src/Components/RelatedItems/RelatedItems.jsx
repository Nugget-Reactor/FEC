import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RelatedItem from './RelatedItem.jsx';
import styled from 'styled-components';


var testProduct = {
  "id": 40344,
  "campus": "hr-rfp",
  "name": "Camo Onesie",
  "slogan": "Blend in to your crowd",
  "description": "The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.",
  "category": "Jackets",
  "default_price": "140.00",
  "created_at": "2021-08-13T14:38:44.509Z",
  "updated_at": "2021-08-13T14:38:44.509Z"
};

const RelatedItems = ({product}) => {
  const [characteristics, setCharacteristics] = useState([]);
  const [relatedItems, setRelatedItems] = useState([]);
  const [relatedPrices, setRelatedPrices] = useState([]);
  const [relatedImages, setRelatedImages] = useState([]);

  useEffect(() => {
    if (product.id) {
      axios.get(`/products/${product.id}/related`) //actually want currentItem.id/related
      .then((results) => {
        // console.log('related in Related Items', results.data);
        setRelatedItems(results.data);  //I want this to be an object with all of the properties I want
      })
      .catch((err) => console.log('error', err));

      //to do for modal
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
        <RelatedItemsList>
          {relatedItems.map((relatedItem) =>
          <RelatedItem relatedItem={relatedItem} key={relatedItem.id}/>)}
        </RelatedItemsList>
      </div>
  )

}

export default RelatedItems;

const RelatedItemsList = styled.ul`
display: inline-block;
border-radius: 3px;
border: 2px solid black;
padding: 0.5rem 0;
`



