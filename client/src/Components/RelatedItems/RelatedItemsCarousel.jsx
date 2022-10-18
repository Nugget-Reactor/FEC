import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import RelatedItemTest from './RelatedItemTest.jsx';

const RelatedItemsCarousel = ({relatedItems, handleProductChange}) => {
  console.log('related items prop', relatedItems);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rightButtonVisible, setRightButtonVisible] = useState(true);
  const [leftButtonVisible, setLeftButtonVisible] = useState(false);

  var fourCurrent;

  useEffect(() => {
    setCurrentIndex(0);
    fourCurrent = relatedItems.slice(0, 4);
    console.log('currentIndex', currentIndex);
    console.log('how many times does this go off?'); //only once per render
  }, [relatedItems]);

  useEffect(() => { //make visibility conditional upon rendering
    if (relatedItems.length > 0) {
      console.log('index changed', currentIndex);
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
      <RelatedItemTest relatedItem={currentItem} handleProductChange={handleProductChange} key={currentItem.id} />)}</>;
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
overflow: auto;
    width: 100%;
    height: 100%;
`;

const RIContent = styled.ul`

  display: flex;

  box-sizing: border-box;
  border: 2px solid red;
  max-height: 30em;
  overflow: auto;
  max-width: 100%;
  // old, good code
  // display: inline-block;
  border-radius: 3px;
  // border: 2px solid black;
  padding: 0.5rem 0;
  // transition: all 250ms linear;
  //   -ms-overflow-style: none;  /* hide scrollbar in IE and Edge */
  // scrollbar-width: none;  /* hide scrollbar in Firefox */
  // &:: -webkit-scrollbar, {
  //   display: none; //not sure about this
  }
`;
// const RelatedItemsList = styled.ul`

//   // new carousel first
//   display: flex;

//   box-sizing: border-box;
//   border: 2px solid red;
//   max-height: 30em;
//   overflow: auto;
//   max-width: 100%;
//   // old, good code
//   // display: inline-block;
//   border-radius: 3px;
//   // border: 2px solid black;
//   padding: 0.5rem 0;
// `;

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