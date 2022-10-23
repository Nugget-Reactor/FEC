import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import RelatedItemsCarousel from './RelatedItemsCarousel.jsx';
import CompareModal from './CompareModal.jsx';
import CompareModalTable from './CompareModalTable.jsx';

const RelatedItems = ({ product, handleProductChange, currentMeta, productName }) => {
  const [characteristics, setCharacteristics] = useState([]);
  const [relatedItems, setRelatedItems] = useState([]);
  const [relatedPrices, setRelatedPrices] = useState([]);
  const [relatedImages, setRelatedImages] = useState([]);
  const [noneRelated, setNoneRelated] = useState('');
  const [currentCharacteristics, setCurrentCharacteristics] = useState({});
  const [relatedCharacteristics, setRelatedCharacteristics] = useState({});
  const [showCompareModal, setShowCompareModal] = useState(false);
  const [relatedName, setRelatedName] = useState('');
  // console.log('currentMeta', currentMeta);

  useEffect(() => {
    /**to get related items **/
    if (product.id) {
      axios.get(`/products/${product.id}/related`)
        .then((results) => {
          // console.log('results.data', results.data);
          if (results.data.length === 0) {
            setNoneRelated('There are no Related Products for this item');
          } else {
            for (var i = 0; i < results.data.length - 1; i++) {
              var sliced = results.data.slice(i + 1);
              if (results.data[i].id === product.id) { //eliminates product appearing in own related items
                results.data.splice(i, 1);
              }
            }
            setRelatedItems(results.data);
          }

        })
        .catch((err) => console.log('error', err));

    }
  }, [product]);

  const AnyRelatedItems = () => {
    return noneRelated.length === 0 ? <RelatedItemsCarousel relatedItems={relatedItems} handleProductChange={handleProductChange} isModalVisible={isModalVisible} /> : <h1>{noneRelated}</h1>;
  };

  const closeModal = () => {
    setShowCompareModal(false);
  };

  const isModalVisible = (event, relatedChar, relName) => {
    event.preventDefault();
    // console.log('relatedChar', relatedChar);
    setRelatedCharacteristics(relatedChar);
    setRelatedName(relName);
    setShowCompareModal(true);
    setCurrentCharacteristics(currentMeta.characteristics);
  };

  return (
    <div id="related-items-panel">
      {showCompareModal ? <CompareModal closeModal={closeModal} productName={productName} relatedCharacteristics={relatedCharacteristics} currentCharacteristics={currentCharacteristics} relatedName={relatedName} /> : null}
      <Heading>
        <h2>Related Products</h2>
      </Heading>
      <RelatedItemsDiv>
        <Carousel>
          <AnyRelatedItems/>
        </Carousel>
      </RelatedItemsDiv>
    </div>
  );
};

export default RelatedItems;

const Heading = styled.div`
width: 75%;
margin: 0 auto;
`;

const RelatedItemsDiv = styled.div`
justify-content: space-around;
display: flex;
max-height: 100%;
align-items: stretch;`;

const Carousel = styled.div`
  max-width: 100%;
  max-height: 100%;
  word-wrap: normal;
  overflow: hidden;
`;