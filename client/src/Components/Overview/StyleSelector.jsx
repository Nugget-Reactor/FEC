import React from 'react';
import styled from 'styled-components';
import './overview.css';

const {useState, useEffect} = React;

const StyleSelector = ({productStyles, handleStyleChange, currentStyle}) => {



  return (
    <div>
      {currentStyle &&
      <p>{'Style\>'} {currentStyle.name}</p>
      }
      <div className='styles-container'>
        {productStyles && productStyles.map((style, index) => {
          return (
            <img className="style-thumbnail" key={index} src={style.photos[0].thumbnail_url} onClick={() => handleStyleChange(style.style_id)}></img>
          );
        })}
      </div>
    </div>
  );
};

export default StyleSelector;
