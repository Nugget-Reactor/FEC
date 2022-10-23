import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CharacteristicInput = ({ name, charID, onChange }) => {
  const [descriptions, setDescriptions] = useState({});
  useEffect(() => {
    let desc = {};
    if(name === 'Size') {
      desc[1] = 'Too Small';
      desc[5] = 'Too Big';
    } else if (name === 'Width') {
      desc[1] = 'Too Narrow';
      desc[5] = 'Too Wide';
    } else if (name === 'Comfort') {
      desc[1] = 'Uncomfortable';
      desc[5] = 'Perfect';
    } else if (name === 'Quality') {
      desc[1] = 'Poor';
      desc[5] = 'Perfect';
    } else if (name === 'Length') {
      desc[1] = 'Short';
      desc[5] = 'Long';
    } else if (name === 'Fit') {
      desc[1] = 'Tight';
      desc[5] = 'Loose';
    }
    setDescriptions(desc);
  }, [])

  return(
    <div>
      <CharName>{name}</CharName>
      <RadioContainer>
        <LeftDescription>{descriptions[1]}</LeftDescription>
        <VerticalLabel>
          <input type="radio" name={name} value={1} onChange={(e)=>onChange(name, e.target.value)}/>
          1
        </VerticalLabel>
        <VerticalLabel>
          <input type="radio" name={name} value={2} onChange={(e)=>onChange(name, e.target.value)}/>
          2
        </VerticalLabel>
        <VerticalLabel>
          <input type="radio" name={name} value={3} onChange={(e)=>onChange(name, e.target.value)}/>
          3
        </VerticalLabel>
        <VerticalLabel>
          <input type="radio" name={name} value={4} onChange={(e)=>onChange(name, e.target.value)}/>
          4
        </VerticalLabel>
        <VerticalLabel>
          <input type="radio" name={name} value={5} onChange={(e)=>onChange(name, e.target.value)}/>
          5
        </VerticalLabel>
        <RightDescription>{descriptions[5]}</RightDescription>
      </RadioContainer>
    </div>
  );
}

const RadioContainer = styled.div`
  display:grid;
  grid-template-columns: 100px repeat(5, 1fr) 100px;
  justify-items:center;
  margin: 0 5%;
`
const VerticalLabel = styled.label`
  display:flex;
  flex-direction: column;
  align-items:center;
  align-self:end;
`
const CharName = styled.h5`
  margin: 2px 2px;
`
const LeftDescription = styled.p`
  justify-self: end;
`
const RightDescription = styled.p`
  justify-self: start;
`
export default CharacteristicInput;