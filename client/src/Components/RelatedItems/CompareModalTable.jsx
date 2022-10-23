import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { createStars } from '../../Tools/createStars';


const CompareModalTable = ({productName, relatedCharacteristics, currentCharacteristics, relatedName}) => {
  const [tableData, setTableData] = useState([]);


  useEffect(() => { //organize table data
    var tableObject = {};
    var tableArray = [];
    if (Object.keys(currentCharacteristics).length > 0) { //sort characeristics in an object product first
      for (var prodKeys in currentCharacteristics) {
        tableObject[prodKeys] = [];
        // var prodValue = formatValues(currentCharacteristics[prodKeys].value);
        // tableObject[prodKeys].push(prodValue);

        tableObject[prodKeys].push(currentCharacteristics[prodKeys].value);
      }
    }

    if (Object.keys(relatedCharacteristics).length > 0) { //related product second
      for (var relKeys in relatedCharacteristics) {
        if (!tableObject[relKeys]) {
          tableObject[relKeys] = [];
          tableObject[relKeys].push(null); //null for product entry if key not in object yet
        }
        tableObject[relKeys].push(relatedCharacteristics[relKeys].value);
      }
    }

    for (var key in tableObject) { //assemble characteristics into array table mapping format
      var rowArray = [];
      rowArray.push(tableObject[key][0]);
      rowArray.push(key);
      tableObject[key][1] ? rowArray.push(tableObject[key][1]) : rowArray.push(null);
      tableArray.push(rowArray);
    }
    setTableData(tableArray);
    console.log('tableArray', tableArray);
  }, []);

  const formatValues = (value) => {
    if (value === null || value === undefined) {
      return <td></td>; //null
    } else if (Number(value) * 1 === Number(value)) {
      return <td>{createStars(Number(value))}</td>;
    } else if (value === true) {
      return <td>√</td>; //might need fontawesome check
    } else {
      return <td>{value}</td>;
    }
  };

  const TableRow = ({row}) => {
    return <tr>{row.map((value) => <td>{formatValues(value)}</td>)}</tr>;
  };

  return (
    <CompareTableDiv>
      <thead>
        <tr>
          <th>{productName}</th>
          <th></th>
          <th>{relatedName}</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, index) => <TableRow row={row} key={index + 'row'}/> )}
      </tbody>
    </CompareTableDiv>
  );
};

export default CompareModalTable;

const CompareTableDiv = styled.table`
text-align: center;
width: 40vw;
height: 60vh;
text-align: center;
overflow: auto;
background: white;
border-radius: 10px;
`;