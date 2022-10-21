import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { createStars } from '../../Tools/createStars';


const SingleOutfit = ({outfit, handleProductChange}) => {
  const [currentStyle, setCurrentStyle] = useState({});
  const [currentPhotoURL, setCurrentPhotoURL] = useState('');
  const [regPrice, setRegPrice] = useState('');
  const [strikeRegPrice, setStrikeRegPrice] = useState('');
  const [salePrice, setSalePrice] = useState('');
  console.log('outfit in outfit', outfit);
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
      return <DefaultImage src={currentPhotoURL} />;
    } else {
      return <NoPhotoDiv><NoPhotoH1><div>No Photo</div><div>Found</div></NoPhotoH1></NoPhotoDiv>;
    }
  };

  return (
    <OutfitItemListItem onClick={(event) => { handleProductChange(outfit.id); }}>
      <OutfitImageDiv>
        {conditionalPhoto()}
        <ActionButtonOutfit>X</ActionButtonOutfit></OutfitImageDiv>
      <h5>{outfit.category}</h5>
      <h4>{outfit.name}</h4>
      <Pricing salePrice={salePrice} regPrice={regPrice} strikePrice={strikeRegPrice} />
      {createStars(outfit.ratings)}
    </OutfitItemListItem>
  );
};

export default SingleOutfit;

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

const OutfitItemListItem = styled.li` //the Outfit items card itself
  display: inline-block;
  border-radius: 3px;
  margin: 5px;
  border: 2px solid black;
  padding: 5px;
  height: 100%;
`;

const OutfitImageDiv = styled.div` //the image div
  position:relative; // so I can position the action button
  margin: 3px;
  height: 350px;
  width: 250px;
  word-wrap: normal;
`;
const DefaultImage = styled.img` // image itself fits image div
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const ActionButtonOutfit = styled.button`
  z-index: 1;
  background: white;
  border: 2px solid #f80;
  padding-left: .2em;
  padding-right: .2em;
  border-radius: 50%;
  //old good code below
  position:absolute;
  right: 6px;
  top: 6px;
  font-size: 3em;
  // background: none;
  border: none;
  color: #f00;
  // &::after {
  //   font-family: FontAwesome;
  //   content: "\\e59b";
  }
`;

const SaleAndStrikeBlock = styled.div`
  display: inline-block;
`;

const SalePricing = styled.div`
  // display: inline-flex;
  //good old code
  color: red;
  margin-right: 5px;
  display: inline-block;
`;

const StrikePricing = styled.div`
  display: inline-flex;
  //good old code
  text-decoration: line-through;
  // display: inline-block;
`;