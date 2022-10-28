import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { createStars, getAverage } from '../../Tools/createStars';

const RelatedItem = ({relatedItem, handleProductChange, isModalVisible}) => {
  const [currentStyle, setCurrentStyle] = useState({});
  const [currentPhotoURL, setCurrentPhotoURL] = useState('');
  const [regPrice, setRegPrice] = useState('');
  const [strikeRegPrice, setStrikeRegPrice] = useState('');
  const [salePrice, setSalePrice] = useState('');
  const [relatedCharacteristics, setRelatedCharacteristics] = useState({});

  /** to set default style for card **/
  if (relatedItem) {
    var ratings = getAverage(relatedItem.ratings);
  }

  useEffect(() => {
    var defaultStyle = false;
    if (relatedItem && relatedItem.results) {
      if (relatedItem.results.length > 0) {
        relatedItem.results.forEach((style) => {
          if (style['default?']) {
            setCurrentStyle(style);
            defaultStyle = true;
          }
        });
        if (!defaultStyle) { //sets default to first item in styles array if no default found in the styles array - not precisely to spec, but does not leave divs awkwardly rendered and broken-looking.
          setCurrentStyle(relatedItem.results[0]);
        }
      }
    }

    if (relatedItem && relatedItem.characteristics) {
      setRelatedCharacteristics(relatedItem.characteristics);
    }

  }, []);

  /** to set default photo and default price for related items card **/
  useEffect(() => {
    if (currentStyle.photos && currentStyle.photos[0]) { //render photos conditionally to no image found notice if null
      setCurrentPhotoURL(currentStyle.photos[0].url);
    } else {
      setCurrentPhotoURL(null);
    }
    if (currentStyle.sale_price) {
      setStrikeRegPrice(currentStyle.original_price);
      setSalePrice(currentStyle.sale_price);
    } else {
      setRegPrice(currentStyle.original_price);
    }
  }, [currentStyle]);

  const conditionalPhoto = () => {
    if (typeof currentPhotoURL === 'string') {
      return <RelatedDefaultImage src={currentPhotoURL} />;
    } else {
      return <NoPhotoDiv><NoPhotoH1><div>Photo</div><div>Coming</div><div>Soon!</div></NoPhotoH1></NoPhotoDiv>;
    }
  };

  const conditionalRatings = () => {
    if (Object.keys(relatedItem.ratings).length > 0) {
      return <div>{createStars(ratings)}</div>;
    } else {
      return <div></div>;
    }
  };

  /** function for handling strikethrough proicing/ sale pricing/ regular pricing */
  const Pricing = ({salePrice, regPrice, strikePrice}) => {
    if (salePrice) {
      return <SaleAndStrikeBlock><SalePricing>${salePrice}  </SalePricing><StrikePricing>${strikePrice}</StrikePricing></SaleAndStrikeBlock>;
    } else {
      return <div>${regPrice}</div>;
    }
  };

  // need action button to look better/be more accessible, and be functional => Compare modal
  // may need to pass up related item characteristics OR pass down product characteristicsRelated onClick={(event) => compareChar(relatedItem.idRelated>
  return (
    <RelatedItemListItem aria-label="select-related-product"onClick={(event) => { handleProductChange(relatedItem.id); }}>
      <RelatedImageDiv>
        {conditionalPhoto()}
        <ActionButtonRelated aria-label="compare-products-button" onClick={(event) => {
          event.stopPropagation(); //stops product card click from registering
          // event.preventDefault(); //tried this to stop cards from re-rendering
          isModalVisible(event, relatedCharacteristics, relatedItem.name); //send current characteristics up to RelatedItems
        }} />
      </RelatedImageDiv>
      <h5>{relatedItem.category}</h5>
      <h4>{relatedItem.name}</h4>
      <Pricing salePrice={salePrice} regPrice={regPrice} strikePrice={strikeRegPrice} />
      {conditionalRatings()}
    </RelatedItemListItem>
  );
};

export default RelatedItem;

const NoPhotoDiv = styled.div`
  top: 50%;
  bottom: 0px;
  border: 1px solid gray;
  display: block;
  margin: auto;
  height: 18em;
  width: 14em;
  cursor: pointer;
  border-radius: 10px;
`;

const NoPhotoH1 = styled.h1`
  bottom: 0px;
  color: gray;
  padding-top: 8vh;
  text-align: center;
  vertical-align: middle;
  border-radius: 10px;
`;

const RelatedItemListItem = styled.li` //the related items card itself
  cursor: pointer;
  list-style-type: none;
  display: inline-block;
  border-radius: 3px;
  margin: .8em; //outside borders
  padding: .5em; //inside borders
  border: 2px solid black;
  min-height: 27em;
  border-radius: 10px;
`;

const RelatedImageDiv = styled.div` //the image div
  position: relative; // so I can position the action button
  margin: auto;
  height: 18em;
  width: 14em;
  border: 1px solid gray;
  border-radius: 10px;
  overflow: hidden;
`;

const RelatedDefaultImage = styled.img` // image itself fits image div
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const ActionButtonRelated = styled.button` // the star
  z-index: 1;
  padding-top: 5px;
  padding-bottom: 5px;
  font-size: 1.8em;
  background: white;
  border: 3px solid #f80;
  border-radius: 50%;
  cursor: pointer;
  position:absolute;
  right: 6px;
  top: 6px;
  color: #f80;
  &::after {
    font-family: FontAwesome;
    content: "\\f005";
  }
`;

const SaleAndStrikeBlock = styled.div`
  display: inline-block;
`;

const SalePricing = styled.div`
  display: inline-flex;
  color: red;
  margin-right: 5px;
`;

const StrikePricing = styled.div`
  display: inline-flex;
  text-decoration: line-through;
`;