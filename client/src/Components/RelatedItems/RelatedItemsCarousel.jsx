import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import RelatedItemTest from './RelatedItemTest.jsx';

const RelatedItemsCarousel = ({relatedItems, handleProductChange}) => {


  return (
    <div>
      <RIContainer>
        <RIWrapper>
          <RIContentWrapper>
            <RIContent>
            <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
    <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
    <img src="https://via.placeholder.com/1600x300" alt="placeholder" />

            {/* <div>{relatedItems.map((relatedItem) =>
          <RelatedItemTest relatedItem={relatedItem} handleProductChange={handleProductChange} key={relatedItem.id} />)}</div> */}
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
`
const RIWrapper = styled.div`
display: flex;
width: 100%;
position: relative;
`

const RIContentWrapper = styled.div`
overflow: hidden;
    width: 100%;
    height: 100%;
`

const RIContent = styled.div`
  display: flex;
  transition: all 250ms linear;
    -ms-overflow-style: none;  /* hide scrollbar in IE and Edge */
  scrollbar-width: none;  /* hide scrollbar in Firefox */
  &:: -webkit-scrollbar, {
    display: none; //not sure about this
  }
`