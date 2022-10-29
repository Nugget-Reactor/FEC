import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const OutfitButtonCard = ({addOutfit}) => {

  return (
    <OutfitButtonLi data-testid="add-to-outfit-button">
      <HolderDiv>
        <CardSquare>
          <AddButton aria-label="add-to-outfit-button" onClick={(event) => addOutfit()}>+</AddButton>
        </CardSquare>
        <ActionText>Add Current Product to your Outfit</ActionText>
      </HolderDiv>
    </OutfitButtonLi>
  );
};

export default OutfitButtonCard;


const OutfitButtonLi = styled.li` //the Outfit items card itself
box-shadow: 20px 25px 25px gray;
cursor: pointer;
display: inline-block;
border-radius: 3px;
border: 2px solid black;
min-height: 27em; //makes button same vertical height as outfit cards
margin: .8em; //outside borders
padding: .5em; //inside borders
border-radius: 10px;
`;

const HolderDiv = styled.div`
position:relative; // so I can position the action button
margin: auto;
height: 18em;
width: 14em;
`;

const CardSquare = styled.div`
position:relative;
bottom: 0px;
max-width: 100%;
border: 1px solid gray;
display: block;
margin: auto;
text-align: center;
height: 18em;
width: 14em;
border-radius: 10px;
`;

const AddButton = styled.button`
cursor: pointer;
font-size: 8em;
text-align: center;
background: none;
padding-top: 30%;
border: none;
top: 40%;
color: #091;
`;

const ActionText = styled.h1`
  // min-height: 100%;
  color: #091;
  padding: 0 .5em;
  // padding-bottom: .5em;

  // font-color: green
  font-size: 1.8em;
  word-wrap: normal;
  text-align: center;
`;
