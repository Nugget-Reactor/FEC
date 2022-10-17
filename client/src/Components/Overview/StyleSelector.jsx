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
          //Todo
        })}
      </div>
    </div>
  );
};

export default StyleSelector;
