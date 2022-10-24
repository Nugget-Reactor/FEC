import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { createStars } from '../../Tools/createStars';


const SingleOutfit = ({outfit, handleProductChange, removeOutfit}) => {
  const [currentStyle, setCurrentStyle] = useState({});
  const [currentPhotoURL, setCurrentPhotoURL] = useState('');
  const [regPrice, setRegPrice] = useState('');
  const [strikeRegPrice, setStrikeRegPrice] = useState('');
  const [salePrice, setSalePrice] = useState('');

  useEffect(() => {
    if (outfit.salePrice) {
      setStrikeRegPrice(outfit.regPrice);
    }
    setRegPrice(outfit.regPrice);
    setSalePrice(outfit.salePrice);
    setCurrentPhotoURL(outfit.currentPhotoURL);

  }, [outfit]);

  const conditionalPhoto = () => {
    if (typeof currentPhotoURL === 'string') {
      return <DefaultImage src={currentPhotoURL} onClick={(event) => { handleProductChange(outfit.id); }}/>;
    } else {
      return <NoPhotoDiv onClick={(event) => { handleProductChange(outfit.id); }}><NoPhotoH1><div>No Photo</div><div>Found</div></NoPhotoH1></NoPhotoDiv>;
    }
  };

  const conditionalRatings = () => { //if no ratings, do not render any stars business doc says if no reviews?
    if (outfit.ratings > 0) {
      return <div>{createStars(outfit.ratings)}</div>;
    } else {
      return <div></div>; //change this to blank if no stars, set default size
    }
  };

  /** function for handling strikethrough pricing/ sale pricing/ regular pricing */
  const Pricing = ({salePrice, regPrice, strikePrice}) => {
    if (salePrice) {
      return <SaleAndStrikeBlock><SalePricing>${salePrice}</SalePricing><StrikePricing>${strikePrice}</StrikePricing></SaleAndStrikeBlock>;
    } else {
      return <div>${regPrice}</div>;
    }
  };

  return (
    <OutfitItemListItem >
      <OutfitImageDiv >
        {conditionalPhoto()}
        <ActionButtonOutfit onClick={(event) => removeOutfit(outfit.id)}></ActionButtonOutfit>
      </OutfitImageDiv>
      <h5>{outfit.category}</h5>
      <h4>{outfit.name}</h4>
      <Pricing salePrice={salePrice} regPrice={regPrice} strikePrice={strikeRegPrice} />
      {conditionalRatings()}
    </OutfitItemListItem>
  );
};

export default SingleOutfit;


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

const OutfitItemListItem = styled.li` //the Outfit items card itself
  cursor: pointer;
  // list-style-type: none;
  display: inline-block;
  border-radius: 3px;
  margin: .8em; //outside borders
  padding: .5em; //inside borders
  border: 2px solid black;
  min-height: 27em;
  border-radius: 10px;
`;

const OutfitImageDiv = styled.div` //the image div
position: relative; // so I can position the action button
margin: auto;
height: 18em;
width: 14em;
border: 1px solid gray;
border-radius: 10px;
overflow: hidden;
`;

const DefaultImage = styled.img` // image itself fits image div
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const ActionButtonOutfit = styled.button`  //the X
  z-index: 1;
  // padding: .2em .4em;
  width: 1.7em;
  height: 1.7em;
  font-size: 1.8em;
  background: white;
  border: 4px solid #777;
  cursor: pointer;
  border-radius: 50%;
  position:absolute;
  right: 6px;
  top: 6px;
  color: #777;
  &:after{
    font-family: FontAwesome;
    content: "\\58";
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