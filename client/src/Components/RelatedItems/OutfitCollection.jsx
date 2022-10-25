import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import OutfitsCarousel from './OutfitsCarousel.jsx';

const Outfits = ({handleProductChange, addOutfit, allOutfits, removeOutfit}) => { //it will need handleclick to change page to that item

  return (
    <OutfitsContainer>
      <Heading>
        <h2>Your Outfit</h2>
      </Heading>
      <Carousel>
        <OutfitsCarousel handleProductChange={handleProductChange} addOutfit={addOutfit} allOutfits={allOutfits} removeOutfit={removeOutfit}/>
      </Carousel>
    </OutfitsContainer>
  );
};

export default Outfits;

const OutfitsContainer = styled.div`
  background-color: #B4F8C8;
`
const Heading = styled.div`
margin: 0;
`;

const Carousel = styled.div`
  max-width: 100%;
  max-height: 100%;
  word-wrap: normal;
  overflow: hidden;
`;