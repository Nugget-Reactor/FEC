import React from 'react';
import CharacterTile from './CharacterTile.jsx';

const Characteristics = ({ chars }) => {

  const renderChars = () => {
    let charComponents = [];

    for(let charName in chars) {
      charComponents.push(<CharacterTile charName={charName} value={chars[charName].value} key={chars[charName].id} />);
    }
    return charComponents;
  }

  return(
    <div>
      {chars ? renderChars() : null}
    </div>
  );
}

export default Characteristics;