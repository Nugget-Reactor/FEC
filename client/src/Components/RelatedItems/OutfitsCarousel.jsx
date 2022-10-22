import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import OutfitButtonCard from './OutfitButtonCard.jsx';
import SingleOutfit from './SingleOutfit.jsx';

const OutfitsCarousel = ({handleProductChange, addOutfit, allOutfits, removeOutfit}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [RightButtonVisible, setRightButtonVisible] = useState(true);
  const [leftButtonVisible, setLeftButtonVisible] = useState(false);
  const [outfits, setOutfits] = useState([]);

  /**to get outfits when updated - only currently seems to work by doing the windlow local storage parse here rather than setting to allOutfits. possible a simple alert might do the trick as well**/
  useEffect(() => {
    setCurrentIndex(0);
    if (window.localStorage.outfits) {
      setOutfits(JSON.parse(window.localStorage.outfits));
    }
  }, [allOutfits]);

  useEffect(() => { //make button visibility conditional upon qty of items in outfits
    if (outfits.length > 0) {
      if (currentIndex === 0) {
        setLeftButtonVisible(false);
      } else if (currentIndex > 0) {
        setLeftButtonVisible(true);
      }

      if (outfits.length < 4 || currentIndex > outfits.length - 4) {
        setRightButtonVisible(false);
      } else {
        setRightButtonVisible(true);
      }
    }
  }, [currentIndex, outfits]);

  let OutfitsRenderMap = () => { //this is not firing off
    if (outfits.length > 0) {
      // console.log('outfits in OutfitsCarousel', outfits);

      var currentThree = outfits.slice(currentIndex, currentIndex + 3);
      return <>{currentThree.map((currentItem) =>
        <SingleOutfit outfit={currentItem} handleProductChange={handleProductChange} key={currentItem.id} removeOutfit={removeOutfit} />)}</>;
    }
  };

  let LeftButton = ({isVisible}) => {
    return leftButtonVisible ? <LeftArrow onClick={(event) => setCurrentIndex(prevIndex => prevIndex - 1)}>&lt;</LeftArrow> : null;
  };

  let RightButton = ({isVisible}) => {
    return RightButtonVisible ? <RightArrow onClick={(event) => setCurrentIndex(prevIndex => prevIndex + 1)} data-testid="right-outfit-carousel-button">&gt;</RightArrow> : null;
  };

  return (
    <div>
      <OutfitContainer>
        <OutfitWrapper>
          <LeftButton isVisible={leftButtonVisible}/>
          <OutfitContentWrapper>
            <OutfitContent>
              <OutfitButtonCard addOutfit={addOutfit} outfits={outfits} />
              <OutfitsRenderMap />
            </OutfitContent>
          </OutfitContentWrapper>
          <RightButton isVisible={RightButtonVisible} />
        </OutfitWrapper>
      </OutfitContainer>
    </div>
  );
};

export default OutfitsCarousel;

const OutfitContainer = styled.div` //farthest outside
width: 100%;
display: flex;
flex-direction: row;
// min-width: 100%;
`;

const OutfitWrapper = styled.div`
display: flex;
width: 100%;
position: relative;
// min-width: 100%;

`;

const OutfitContentWrapper = styled.div`
height: 100%;
width: 100%;
display: inline-block;
min-width: 76vw;
`;

const OutfitContent = styled.ul`
  display: flex;
  border: 2px solid black;
  border-radius: 3px;
  box-sizing: border-box;
  max-width: 100%;
  padding: 0.5rem 0;
  padding-left: 3em; //for buttons
  padding-right: 3em;
  min-height: 80%;
  min-width: 80%;
  border-radius: 10px;

`;

const LeftArrow = styled.button`
position: absolute;
border: none;
top: 50%;
border-radius: 50%;
background: white;
transform: translateY(-50%);
font-size: 1.8em;
left: .3em;
`;

const RightArrow = styled.button`
position: absolute;
border: none;
top: 50%;
border-radius: 50%;
background: white;
transform: translateY(-50%);
font-size: 1.8em;
right: .3em;
`;