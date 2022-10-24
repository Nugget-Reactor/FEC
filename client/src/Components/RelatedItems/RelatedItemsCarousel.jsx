import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import RelatedItem from './RelatedItem.jsx';

const RelatedItemsCarousel = ({relatedItems, handleProductChange, isModalVisible}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rightButtonVisible, setRightButtonVisible] = useState(true);
  const [leftButtonVisible, setLeftButtonVisible] = useState(false);
  // console.log('currentMeta', currentMeta);
  // console.log('productName', productName);

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
      <RelatedItem relatedItem={currentItem} handleProductChange={handleProductChange} key={currentItem.id} isModalVisible={isModalVisible}/>)}</>;
  };

  let LeftButton = ({isVisible}) => {
    return leftButtonVisible ? <LeftArrow onClick={(event) => setCurrentIndex(prevIndex => prevIndex - 1)}></LeftArrow> : null;
  };

  let RightButton = ({isVisible}) => {
    return rightButtonVisible ? <RightArrow onClick={(event) => setCurrentIndex(prevIndex => prevIndex + 1)} data-testid="right-carousel-button"></RightArrow> : null;
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
width: 100%;
display: flex;
flex-direction: row;
`;

const RIWrapper = styled.div`
display: flex;
width: 100%;
position: relative;
`;

const RIContentWrapper = styled.div`  //this manages the min size of the carousel
  width: 100%;
  height: 100%;
  display: inline-block;
  max-width: 76vw;

`;

const RIContent = styled.ul`
  display: flex;
  border: 2px solid black;
  border-radius: 3px;
  box-sizing: border-box;
  max-width: 100%;
  padding: 0.5rem 0;
  padding-left: 3em;
  padding-right: 3em;
  border-radius: 10px;
  min-height: 80%;
  min-width: 80%;

`;

const LeftArrow = styled.button`
  cursor: pointer;
  width: 1.5em;
  height: 1.5em;
  position: absolute;
  border: none;
  top: 50%;
  border-radius: 50%;
  background: white;
  transform: translateY(-50%);
  font-size: 1.8em;
  left: .3em;
  &::after {
    font-family: FontAwesome;
    content: "\\f0d9";
  }
`;

// z-index: 1;
// padding-top: 5px;
// padding-bottom: 5px;
// font-size: 1.8em;
// background: white;


const RightArrow = styled.button`
cursor: pointer;
width: 1.5em;
height: 1.5em;
position: absolute;
border: none;
top: 50%;
border-radius: 50%;
background: white;
transform: translateY(-50%);
font-size: 1.8em;
right: .3em;
color: #000;
&::after {
  font-family: FontAwesome;
  content: "\\f0da";
}
`;