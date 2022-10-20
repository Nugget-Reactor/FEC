import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import RelatedItem from './RelatedItem.jsx';

const RelatedItemsCarousel = ({relatedItems, handleProductChange}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rightButtonVisible, setRightButtonVisible] = useState(true);
  const [leftButtonVisible, setLeftButtonVisible] = useState(false);

  useEffect(() => {
    setCurrentIndex(0);
  }, [relatedItems]);

  useEffect(() => { //make visibility conditional upon rendering
    if (relatedItems.length > 0) {
      if (currentIndex === 0) {
        setLeftButtonVisible(false);
      } else if (currentIndex > 0) {
        setLeftButtonVisible(true);
      }

      if (relatedItems.length < 5 || currentIndex > relatedItems.length - 5) {
        setRightButtonVisible(false);
      } else {
        setRightButtonVisible(true);
      }
    }
  }, [currentIndex, relatedItems]);

  let ItemsRenderMap = () => {
    var currentFour = relatedItems.slice(currentIndex, currentIndex + 4);
    return <>{currentFour.map((currentItem) =>
      <RelatedItem relatedItem={currentItem} handleProductChange={handleProductChange} key={currentItem.id} />)}</>;
  };

  let LeftButton = ({isVisible}) => {
    return leftButtonVisible ? <LeftArrow onClick={(event) => setCurrentIndex(prevIndex => prevIndex - 1)}>&lt;</LeftArrow> : null;
  };

  let RightButton = ({isVisible}) => {
    return rightButtonVisible ? <RightArrow onClick={(event) => setCurrentIndex(prevIndex => prevIndex + 1)} data-testid="right-carousel-button">&gt;</RightArrow> : null;
  };

  return (
    <div>
      <RIContainer>
        <RIWrapper>
          <LeftButton isVisible={leftButtonVisible}/>
          <RIContentWrapper>
            <RIContent>
              <ItemsRenderMap />
            </RIContent>
          </RIContentWrapper>
          <RightButton isVisible={rightButtonVisible} />
        </RIWrapper>
      </RIContainer>
    </div>
  );
};

export default RelatedItemsCarousel;

const RIContainer = styled.div`
width: 100%
display: flex;
flex-direction: row;
`;

const RIWrapper = styled.div`
display: flex;
width: 100%;
position: relative;
`;
const RIContentWrapper = styled.div`
// overflow: auto;
    width: 100%;
    height: 100%;
`;

const RIContent = styled.ul`
  display: flex;
  border: 2px solid black;
  border-radius: 3px;
  box-sizing: border-box;
  max-width: 100%;
  padding: 0.5rem 0;
`;

const LeftArrow = styled.button`
position: absolute;
z-index: 1;
font-size: 1.8em;

background: rgba(255, 255, 255, 0.6);
backdrop-filter: blur(5px);
height: 100vh;
width: 3vw;

left: 0px;
top: 50%;
transform: translateY(-50%);
border: 1px solid white;
`;

const RightArrow = styled.button`
position: absolute;
z-index: 1;
font-size: 1.8em;

background: rgba(255, 255, 255, 0.6);
backdrop-filter: blur(5px);
height: 100vh;
width: 3vw;

right: 0px;
top: 50%;
transform: translateY(-50%);
border: 1px solid white;
`;