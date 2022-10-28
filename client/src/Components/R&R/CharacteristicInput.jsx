import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CharacteristicInput = ({ name, charID, onChange }) => {
  const [descriptions, setDescriptions] = useState([]);
  const [choice, setChoice] = useState('None selected');

  useEffect(() => {
    let descs;
    if(name === 'Size') {
      descs = ['A size too small', '½ a size too small', 'Perfect', '½ a size too big', 'A size too wide'];
    } else if (name === 'Width') {
      descs = ['Too Narrow', 'Slightly narrow', 'Perfect', 'Slightly wide', 'Too Wide'];
    } else if (name === 'Comfort') {
      descs = ['Uncomfortable', 'Slightly uncomfortable', 'Ok', 'Comfortable', 'Perfect'];
    } else if (name === 'Quality') {
      descs = ['Poor', 'Below average', 'What I expected', 'Pretty great', 'Perfect'];
    } else if (name === 'Length') {
      descs = ['Runs Short', 'Runs slightly short', 'Perfect', 'Runs slightly long', 'Runs long'];
    } else if (name === 'Fit') {
      descs = ['Runs tight', 'Runs slightly tight', 'Perfect', 'Runs slightly loose', 'Runs loose'];
    }
    setDescriptions(descs);
  }, [])

  const handleClick = (e) => {
    onChange(name, e.target.value);
    setChoice(descriptions[e.target.value - 1]);
  }

  return(
    <div>
      <CharName>{name}</CharName>
      <Choice>{choice}</Choice>
      <RadioContainer>
        <LeftDescription data-testid="leftDescription">{descriptions[0]}</LeftDescription>
        <VerticalLabel>
          <input type="radio" name={name} value={1} onChange={handleClick} required/>
          1
        </VerticalLabel>
        <VerticalLabel>
          <input type="radio" name={name} value={2} onChange={handleClick} required/>
          2
        </VerticalLabel>
        <VerticalLabel>
          <input type="radio" name={name} value={3} onChange={handleClick} required/>
          3
        </VerticalLabel>
        <VerticalLabel>
          <input type="radio" name={name} value={4} onChange={handleClick} required/>
          4
        </VerticalLabel>
        <VerticalLabel>
          <input type="radio" name={name} value={5} onChange={handleClick} required/>
          5
        </VerticalLabel>
        <RightDescription data-testid="rightDescription">{descriptions[4]}</RightDescription>
      </RadioContainer>
    </div>
  );
}

const RadioContainer = styled.div`
  display:grid;
  grid-template-columns: 100px repeat(5, 1fr) 100px;
  justify-items:center;
  margin: 0 5% 25px;
`
const VerticalLabel = styled.label`
  display:flex;
  flex-direction: column;
  align-items:center;
  align-self:end;
`
const CharName = styled.h5`
  margin: 0 2px;
`
const Choice = styled.p`
  margin: 0 auto;
  width: fit-content;
`
const LeftDescription = styled.p`
  justify-self: end;
  margin: 0;
`
const RightDescription = styled.p`
  justify-self: start;
  margin: 0;
`
export default CharacteristicInput;