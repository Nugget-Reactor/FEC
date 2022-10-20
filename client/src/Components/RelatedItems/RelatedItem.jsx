import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { createStars, getAverage } from '../../Tools/createStars';


const RelatedItem = ({relatedItem, handleProductChange}) => {
  const [currentStyle, setCurrentStyle] = useState({});
  const [currentPhotoURL, setCurrentPhotoURL] = useState('');
  const [regPrice, setRegPrice] = useState('');
  const [strikeRegPrice, setStrikeRegPrice] = useState('');
  const [salePrice, setSalePrice] = useState('');

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
      return <NoPhotoDiv><NoPhotoH1><div>No Photo</div><div>Found</div></NoPhotoH1></NoPhotoDiv>;
    }
  };

  const conditionalRatings = () => { //if no ratings, do not render any stars business doc says if no reviews?
    if (Object.keys(relatedItem.ratings).length > 0) {
      return <div>{createStars(ratings)}</div>;
    } else {
      console.log("if height of div is wrong, it's because there are no reviews. see line 63, RelatedItem");
      return <div>No Reviews Yet</div>;
    }
  };

  // need action button to look better/be more accessible, and be functional => Compare modal
  // also if no reviews, review div should be hidden
  return (
    <RelatedItemListItem onClick={(event) => { handleProductChange(relatedItem.id); }}>
      <RelatedImageDiv>
        {conditionalPhoto()}
        <ActionButtonRelated></ActionButtonRelated></RelatedImageDiv>
      <h5>{relatedItem.category}</h5>
      <h4>{relatedItem.name}</h4>
      <Pricing salePrice={salePrice} regPrice={regPrice} strikePrice={strikeRegPrice} />
      {conditionalRatings()}
    </RelatedItemListItem>
  );
};

export default RelatedItem;

/** function for handling strikethrough proicing/ sale pricing/ regular pricing */
const Pricing = ({salePrice, regPrice, strikePrice}) => {
  if (salePrice) {
    return <SaleAndStrikeBlock><SalePricing>${salePrice}  </SalePricing><StrikePricing>${strikePrice}</StrikePricing></SaleAndStrikeBlock>;
  } else {
    return <div>${regPrice}</div>;
  }
};
const NoPhotoDiv = styled.div`
  top: 50%;
  bottom: 0px;
  height: 350px;
  max-width: 100%;
  overflow: hidden;
  border: 1px solid gray;
  display: block;
  margin: auto;
`;

const NoPhotoH1 = styled.h1`
  bottom: 0px;
  color: gray;
  padding-top: 8vh;
  text-align: center;
  vertical-align: middle;
  overflow: hidden;
`;

const RelatedItemListItem = styled.li` //the related items card itself
  display: inline-flex;
  display: inline-block;
  border-radius: 3px;
  margin: 5px;
  border: 2px solid black;
  padding: 5px;
  height: 100%;

`;

const RelatedImageDiv = styled.div` //the image div
  position:relative; // so I can position the action button
  margin: 3px;
  height: 350px;
  width: 250px;
  word-wrap: normal;
`;
const RelatedDefaultImage = styled.img` // image itself fits image div
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const ActionButtonRelated = styled.button`
  background: white;
  border: 2px solid #f80;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 50%;
  //old good code below
  position:absolute;
  right: 6px;
  top: 6px;
  font-size: 30px;
  // background: none;
  // border: none;
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
  //good old code
  color: red;
  margin-right: 5px;
  // display: inline-block;
`;

const StrikePricing = styled.div`
  display: inline-flex;
  //good old code
  text-decoration: line-through;
  // display: inline-block;
`;