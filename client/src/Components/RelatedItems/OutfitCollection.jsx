import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import OutfitsCarousel from './OutfitsCarousel.jsx';

const Outfits = ({handleProductChange, addOutfit, allOutfits, removeOutfit}) => { //it will need handleclick to change page to that item

  return (
    <div id="outfits-panel">
      <Heading>
        <h2>Your Outfit</h2>
      </Heading>
      <OutfitsDiv>
        <Carousel>
          <OutfitsCarousel handleProductChange={handleProductChange} addOutfit={addOutfit} allOutfits={allOutfits} removeOutfit={removeOutfit}/>
        </Carousel>
      </OutfitsDiv>
    </div>
  );
};

export default Outfits;

const Heading = styled.div`
width: 75%;
margin: 0 auto;
`;

const OutfitsDiv = styled.div`
justify-content: space-around;
display: flex;
max-height: 100%;
align-items: stretch;
// min-height: 100%;
`;

const Carousel = styled.div`
  max-width: 100%;
  max-height: 100%;
  word-wrap: normal;
  overflow: hidden;
`;