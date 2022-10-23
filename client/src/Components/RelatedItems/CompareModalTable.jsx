import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { createStars } from '../../Tools/createStars';


const CompareModalTable = ({productName, relatedCharacteristics, currentCharacteristics, relatedName}) => {
  const [tableData, setTableData] = useState([]);

  const assembleTable = () => { //organize table data
    var tableObject = {};
    var tableArray = [];
    if (Object.keys(currentCharacteristics).length > 0) {
      for (var prodKeys in currentCharacteristics) {
        // if (!tableObject[prodKeys]) {
        tableObject[prodKeys] = [];
        tableObject[prodKeys].push(currentCharacteristics[prodKeys].value);
        // } else {
        //   var prodChar = {};
        //   prodChar.prod = currentCharacteristics[prodKeys].value;
        //   tableObject[prodKeys].push(prodChar);
        // }
      }
    }

    if (Object.keys(relatedCharacteristics).length > 0) {
      for (var relKeys in relatedCharacteristics) {
        if (!tableObject[relKeys]) {
          tableObject[relKeys] = [];
          tableObject[relKeys].push(null);
        }
        tableObject[relKeys].push(relatedCharacteristics[relKeys].value);
      //     relChar.rel = relatedCharacteristics[relKeys].value;
      //     tableObject[relKeys].push(relChar);
      //     relChar.rel = relatedCharacteristics[relKeys].value;
      //     tableObject[relKeys].push(relChar);
      //   }
      }
    }

    // for (var key in tableObject) {
    //   var rowArray = [];

    //   tableObject[key].forEach((characteristic, index) => {
    //     if ()
    //   })
    //   tableObject[key].prod ? rowArray.push(tableObject[key].prod) : rowArray.push(null);
    //   rowArray.push(key);
    //   tableObject[key].rel ? rowArray.push(tableObject[key].rel) : rowArray.push(null);
    //   tableArray.push(rowArray);
    // }
    console.log('tableObject', tableObject);
    console.log('tableObject', tableArray);

  };
  assembleTable();
  // console.log(productName, currentCharacteristics, relatedName, relatedCharacteristics);
  return (
    <CompareTableDiv>
      <thead>
        <tr>
          <th>{productName}</th>
          <th></th>
          <th>{relatedName}</th>
        </tr>
      </thead>




    </CompareTableDiv>
  );
};

export default CompareModalTable;

const CompareTableDiv = styled.table`
width: 40vw;
height: 60vh;
text-align: center;
overflow: auto;
background: white;
border-radius: 10px;
`;