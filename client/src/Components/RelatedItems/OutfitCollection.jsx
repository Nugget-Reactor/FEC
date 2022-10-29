import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import OutfitsCarousel from './OutfitsCarousel.jsx';
import { TrackerContext } from '../../Tools/clickTracker';


const Outfits = ({ handleProductChange, addOutfit, allOutfits, removeOutfit }) => {
  const tracker = useContext(TrackerContext);

  return (
    <OutfitsContainer onClick={(e) => tracker(e.target, 'Your Outfit')}>
      <Heading>
        <h2>Your Outfit</h2>
      </Heading>
      <Carousel>
        <OutfitsCarousel handleProductChange={handleProductChange} addOutfit={addOutfit} allOutfits={allOutfits} removeOutfit={removeOutfit} />
      </Carousel>
    </OutfitsContainer>
  );
};

export default Outfits;

const OutfitsContainer = styled.div`
background: linear-gradient(to left
, #defce7, #B4F8C8 );
box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;
const Heading = styled.div`
padding-top: 20px;
margin: 0;
`;

const Carousel = styled.div`
  max-width: 100%;
  max-height: 100%;
  word-wrap: normal;
  overflow: hidden;
  padding-bottom: 30px;
`;