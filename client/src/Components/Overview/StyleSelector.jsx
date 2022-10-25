import React from 'react';
import styled from 'styled-components';
import './overview.css';


const StyleSelector = ({productStyles, handleStyleChange, currentStyle}) => {



  return (
    <div>
      {currentStyle &&
      <span style={{fontWeight: 'bold'}}>{'Style\>'}
        &nbsp;<span style={{fontWeight: 'normal'}}>{currentStyle.name}</span>
      </span>
      }
      <div className='styles-container'>
        {productStyles && productStyles.map((style, index) => {
          return (
            <img className="style-thumbnail" key={index} src={style.photos[0].url === null ? 'https://user-images.githubusercontent.com/10515204/56117400-9a911800-5f85-11e9-878b-3f998609a6c8.jpg' : style.photos[0].url} onClick={() => handleStyleChange(style.style_id)}></img>
          );
        })}
      </div>
    </div>
  );
};

export default StyleSelector;
{/* <p>{'Style\>'} {currentStyle.name}</p> */}