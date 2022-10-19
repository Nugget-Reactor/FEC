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
    return rightButtonVisible ? <RightArrow onClick={(event) => setCurrentIndex(prevIndex => prevIndex + 1)}>&gt;</RightArrow> : null;
  };

  return (
    <div>
      <RIContainer>
        <RIWrapper>
          <RIContentWrapper>
            <LeftButton isVisible={leftButtonVisible}/>
            <RIContent>
              <ItemsRenderMap />
            </RIContent>
            <RightButton isVisible={rightButtonVisible}/>
          </RIContentWrapper>
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
height: 100%;

`;

const RIWrapper = styled.div`
display: flex;
width: 100%;
height: 100%;

position: relative;
`;

const RIContentWrapper = styled.div`
overflow: auto;
    width: 100%;
    height: 100%;
`;

const RIContent = styled.ul`

  display: flex;
  border: 2px solid black;
  border-radius: 3px;

  box-sizing: border-box;
  max-height: 30em;
  overflow: auto;
  max-width: 100%;
  padding: 0.5rem 0;

`;

const LeftArrow = styled.button`
font-size: larger;
left: 24px;
position: absolute;
z-index: 1;
top: 50%;
transform: translateY(-50%);
width: 48px;
height: 48px;
border-radius: 24px;
background-color: white;
border: 1px solid #ddd;
`;

const RightArrow = styled.button`
font-size: larger;
right: 24px;
position: absolute;
z-index: 1;
top: 50%;
transform: translateY(-50%);
width: 48px;
height: 48px;
border-radius: 24px;
background-color: white;
border: 1px solid #ddd;
`;



// useEffect(() => {
//   if (relatedItems.length) {
//     setLength(relatedItems.length);
//   }

// }, [relatedItems]);

// const next = () => {
//   if (currentIndex < (length - 1)) {
//     setCurrentIndex(prevState => prevState + 1);
//   }
// };

// const prev = () => {
//   if (currentIndex > 0) {
//     setCurrentIndex(prevState => prevState - 1);
//   }
// };