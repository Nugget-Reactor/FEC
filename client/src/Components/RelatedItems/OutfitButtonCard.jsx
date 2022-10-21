import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const OutfitButtonCard = ({addOutfit}) => {

  return (
    <OutfitItemListItem>
      <OutfitImageDiv>
        <OutfitImage>
          <OutfitImageButton onClick={(event) => addOutfit()}>+</OutfitImageButton>
        </OutfitImage>
        <ActionText>Add Current Product to your Outfits</ActionText>
      </OutfitImageDiv>
    </OutfitItemListItem>
  );
};

export default OutfitButtonCard;

const ActionText = styled.div`
color: #091;
  padding-top: .5em;
  // font-color: green
  font-size: 1.8em;
  word-wrap: normal;
  text-align: center;
`;

const OutfitItemListItem = styled.li` //the Outfit items card itself
list-style-type: none;
display: inline-flex;
display: inline-block;
border-radius: 3px;
margin: 5px;
border: 2px solid black;
padding: 5px;
min-height: 100%;
`;

const OutfitImageDiv = styled.div`
position:relative; // so I can position the action button
margin: 3px;
height: 400px;
width: 250px;
`;

const OutfitImage = styled.div`
position:relative;
  bottom: 0px;
  height: 350px;
  max-width: 100%;
  border: 1px solid gray;
  display: block;
  margin: auto;
  text-align: center;
`;

const OutfitImageButton = styled.button`
  font-size: 8em;
  text-align: center;
  background: white;
  padding-top: 30%;
  border: none;
  top: 40%;
  color: #091;
`;

// const ActionButtonOutfit = styled.button

