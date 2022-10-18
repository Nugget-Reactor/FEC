import React from 'react';
import styled from 'styled-components';

const CharacterTile = ({ charName, value }) => {
  const getScale = () => {
    return ((+value - 1) / 4 * 100) - 2;
  }
  const getDescriptions = () => {
    let descs = [];
    if(charName === 'Size') {
      descs = ['Too Small', 'Perfect', 'Too Big'];
    } else if (charName === 'Width') {
      descs = ['Too Narrow', 'Perfect', 'Too Wide'];
    } else if (charName === 'Comfort') {
      descs = ['Uncomfortable', 'Ok', 'Perfect'];
    } else if (charName === 'Quality') {
      descs = ['Poor', '', 'Perfect'];
    } else if (charName === 'Length') {
      descs = ['Short', 'Perfect', 'Long'];
    } else if (charName === 'Fit') {
      descs = ['Tight', 'Perfect', 'Loose'];
    }
    return descs.map((desc, i) => {
      let position = 'start';
      if(i === 1) {
        position = 'center';
      } else if (i === 2) {
        position = 'end';
      }
      return <Description key={i} position={position}>{desc}</Description>
    });
  }
  return(
    <div>
      <h5>{charName}</h5>
      <ValueBar left={getScale()}><GreyBar/><GreyBar/><GreyBar/></ValueBar>
      <Descriptions>
        {getDescriptions()}
      </Descriptions>
    </div>
  );
}

const ValueBar = styled.div`
  width: 100%;
  position: relative;
  display:flex;
  justify-content: space-between;
  align-items: center;

  &::after{
    font-family: FontAwesome;
    content: "\\f0d7";
    position: absolute;
    top: -5px;
    left: ${props=>props.left}%;
  }
`
const GreyBar = styled.span`
  width: 32.3%;
  height: 10px;
  display: inline-block;
  background-color: lightgrey;
`
const Descriptions = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
`
const Description = styled.span`
  justify-self: ${props=>props.position};
`
export default CharacterTile;