import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import OutfitsCarousel from './OutfitsCarousel.jsx';

const Outfits = ({handleProductChange, addOutfit}) => { //it will need handleclick to change page to that item
  const [outfits, setOutfits] = useState({});

  useEffect(() => {
    /**to get outfits **/
    console.log(window.localStorage.outfits);

  }, []);

  return (
    <div id="related-items-panel">
      <button onClick={(event) => addOutfit()}>Click</button>
      {/* <h2>Related Products</h2>
      <OutfitsDiv>
        <Carousel>
          <AnyOutfits/>
        </Carousel>
      </OutfitsDiv> */}
    </div>
  );
};

export default Outfits;

const OutfitsDiv = styled.div`
justify-content: space-around;
display: flex;
max-height: 100%;
align-items: stretch;`;

const Carousel = styled.div`
  max-width: 100%;
  max-height: 100%;
  word-wrap: normal;
`;