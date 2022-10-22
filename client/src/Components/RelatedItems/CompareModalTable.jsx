import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { createStars } from '../../Tools/createStars';


const CompareModalTable = ({productName, relatedCharacteristics, currentCharacteristics}) => {
  console.log(productName, relatedCharacteristics, currentCharacteristics);
  return (
    <CompareTable><div>Helloooooo</div></CompareTable>
  );
};

export default CompareModalTable;

const CompareTable = styled.table`
width: 300px;
height: 200px;
background: white;
`;