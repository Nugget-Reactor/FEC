import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import RelatedItemsCarousel from './RelatedItemsCarousel.jsx';
import CompareModal from './CompareModal.jsx';
import CompareModalTable from './CompareModalTable.jsx';
import { TrackerContext } from '../../Tools/clickTracker';

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
  const tracker = useContext(TrackerContext);

  useEffect(() => {
    setNoneRelated('');
    /**to get related items **/
    if (product.id) {
      axios.get(`/products/${product.id}/related`)
        .then((results) => {
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
    <RelatedItemsLayout onClick={(e)=>tracker(e.target, 'Related Products')}>
      {showCompareModal ? <CompareModal closeModal={closeModal} productName={productName} relatedCharacteristics={relatedCharacteristics} currentCharacteristics={currentCharacteristics} relatedName={relatedName} /> : null}
      <Heading>
        <h2 data-testid="related-products-header">Related Products</h2>
      </Heading>
      <Carousel data-testid="related-items-carousel">
        <AnyRelatedItems/>
      </Carousel>
    </RelatedItemsLayout>
  );
};

export default RelatedItems;

const RelatedItemsLayout = styled.div`
  background-color: white;
`;

const Heading = styled.div`
  margin: 0;
  padding-top: 30px;

`;

const Carousel = styled.div`
  max-width: 100%;
  max-height: 100%;
  word-wrap: normal;
  overflow: hidden;
  padding-bottom: 30px;
`;
