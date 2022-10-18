import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const RelatedItemsCarousel = ({relatedItems}) => {
  console.log('related items prop', relatedItems);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsLength, setItemsLength] = useState(0);
  const [rightButtonVisible, setRightButtonVisible] = useState(true);
  const [leftButtonVisible, setLeftButtonVisible] = useState(true);


  if (relatedItems.length > 0) {
    console.log('trying', relatedItems);
    console.log('relatedItems.length', relatedItems.length);
  }

  useEffect(() => {
    if (relatedItems.length > 0) {
      console.log('index changed', currentIndex);
      if (currentIndex === 0) {
        setLeftButtonVisible(false);
      } else if (currentIndex > 0) {
        setLeftButtonVisible(true);
      }

      if (relatedItems.length < 3 || currentIndex > relatedItems.length - 3) {
        setRightButtonVisible(false);
      } else {
        setRightButtonVisible(true);
      }

    }
  }, [currentIndex]);

  // useEffect(() => {
  //   console.log(items);
  //   console.log(items.length);
  //   setItemsLength(items.length);
  // }, []);

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
            {/* <LeftArrow onClick={prev}>&lt;</LeftArrow> */}

            {/* <button className="left-arrow">
              &lt;
            </button> */}
            <RIContent>
              {/* <div>{relatedItems.map((relatedItem) =>
          <RelatedItemTest relatedItem={relatedItem} handleProductChange={handleProductChange} key={relatedItem.id} />)}</div> */}
              <RightButton isVisible={rightButtonVisible}/>
              {/* <RightArrow onClick={next}>&gt;</RightArrow> */}

            </RIContent>
          </RIContentWrapper>
        </RIWrapper>
      </RIContainer>
    </div>
  );
};

export default RelatedItemsCarousel;
//   /** this is the actual carousel and is one possibility
//    * //identify index of different items
//    * use array of related items for index reference
//    * if there are 4 items or less, no arrows
//    * otherwise, only render 4 items
//    * if item 0 is at rightmost, and items are more than 4, render arrow to the right
//    * if item at 0 is index GREATER than 0, and there are more than 5 items total/3 more items than current
//    * render arrow to the left
//    * if
//   **/

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
overflow: hidden;
    width: 100%;
    height: 100%;
`;

const RIContent = styled.div`

  display: flex;
  transition: all 250ms linear;
    -ms-overflow-style: none;  /* hide scrollbar in IE and Edge */
  scrollbar-width: none;  /* hide scrollbar in Firefox */
  &:: -webkit-scrollbar, {
    display: none; //not sure about this
  }
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