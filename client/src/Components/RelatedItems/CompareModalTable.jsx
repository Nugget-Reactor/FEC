import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { createStars } from '../../Tools/createStars';


const CompareModalTable = ({productName, relatedCharacteristics, currentCharacteristics, relatedName}) => {
  console.log(productName, currentCharacteristics, relatedName, relatedCharacteristics);
  return (
    <CompareTable>
      <thead>
        <tr>
          <th>{productName}</th>
          <th></th>
          <th>{relatedName}</th>
        </tr>
      </thead>




    </CompareTable>
  );
};

export default CompareModalTable;

const CompareTable = styled.table`
width: 40vw;
height: 60vh;
text-align: center;
overflow: auto;
background: white;
border-radius: 10px;
`;