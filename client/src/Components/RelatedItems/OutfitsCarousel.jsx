import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import OutfitButtonCard from './OutfitButtonCard.jsx';
import SingleOutfit from './SingleOutfit.jsx';

const OutfitsCarousel = ({handleProductChange, addOutfit}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [RightButtonVisible, setRightButtonVisible] = useState(true);
  const [leftButtonVisible, setLeftButtonVisible] = useState(false);
  const [outfits, setOutfits] = useState([]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [outfits]);

  /**to get outfits **/
  useEffect(() => {
    if (window.localStorage.outfits) {
      console.log('outfits in outfits', JSON.parse(window.localStorage.outfits));
      setOutfits(JSON.parse(window.localStorage.outfits));
    }
  }, []);
  useEffect(() => { //make visibility conditional upon rendeOutfitng
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

  let OutfitsRenderMap = () => {
    if (outfits.length > 0) {
      console.log('outfits in OutfitsCarousel', outfits);

      var currentThree = outfits.slice(currentIndex, currentIndex + 3);
      return <>{currentThree.map((currentItem) =>
        <SingleOutfit outfit={currentItem} handleProductChange={handleProductChange} key={currentItem.id} />)}</>;
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

const OutfitContainer = styled.div`
width: 100%;
display: flex;
flex-direction: row;
`;

const OutfitWrapper = styled.div`
display: flex;
width: 100%;
position: relative;
`;
const OutfitContentWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const OutfitContent = styled.ul`
  display: flex;
  border: 2px solid black;
  border-radius: 3px;
  box-sizing: border-box;
  max-width: 100%;
  padding: 0.5rem 0;
  padding-left: 3vw;
  padding-right: 3vw;
`;

const LeftArrow = styled.button`
position: absolute;
border: none;
background: none;
top: 50%;
transform: translateY(-50%);
font-size: 1.8em;
width: 2em;
left: 1px;
`;

const RightArrow = styled.button`
position: absolute;
border: none;
background: none;
top: 50%;
transform: translateY(-50%);
font-size: 1.8em;
width: 2em;
right: 1px;
`;