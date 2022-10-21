import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import OutfitsCarousel from './OutfitsCarousel.jsx';

const Outfits = ({handleProductChange, addOutfit, allOutfits, removeOutfit}) => { //it will need handleclick to change page to that item

  return (
    <OutfitsSizing>
        <h2>Your Outfit</h2>
      <div id="outfits-panel">
        <OutfitsDiv>
          <Carousel>
            <OutfitsCarousel handleProductChange={handleProductChange} addOutfit={addOutfit} allOutfits={allOutfits} removeOutfit={removeOutfit}/>
          </Carousel>
        </OutfitsDiv>
      </div>
    </OutfitsSizing>
  );
};

export default Outfits;

const OutfitsSizing = styled.div`
// // // display: block;
// // justify-content: space-around;
// // display: flex;
// // align-items: stretch;

//   min-height: 15em;
//   width: 80%;

// //   // justify-content: space-around;
// //   // display: flex;
// //   // max-height: 100%;
// //   // align-items: stretch;
// //   // min-height: 100%;
border: 2px solid black;
`;

const OutfitsDiv = styled.div`
justify-content: space-around;
display: flex;
max-height: 100%;
align-items: stretch;
min-height: 100%;
`;

const Carousel = styled.div`
// min-height: 100%;
//   max-width: 100%;
//   max-height: 100%;
//   word-wrap: normal;
`;