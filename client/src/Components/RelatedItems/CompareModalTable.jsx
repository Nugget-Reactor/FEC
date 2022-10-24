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
      var bothNull = false;
      if (tableObject[key][0] === null && tableObject[key][1] === null ||
        tableObject[key].length === 1 && tableObject[key][0] === null) {
        bothNull = true;
      }

      if (!bothNull) {
        rowArray.push(tableObject[key][0]);
        rowArray.push(key);
        tableObject[key][1] ? rowArray.push(tableObject[key][1]) : rowArray.push(null);
        tableArray.push(rowArray);
      }
    }
    console.log(tableArray);
    console.log(tableObject);
    setTableData(tableArray);
  }, []);

  const formatValues = (value) => {
    if (value === null || value === undefined) {
      return <> </>; //null
    } else if (Number(value) * 1 === Number(value)) {
      return <>{createStars(Number(value))}</>;
    } else if (value === true) {
      return <><Check/></>;
    } else {
      return <>{value}</>;
    }
  };

  const TableRow = ({row}) => {
    return <tr>{row.map((value, index) => <td key={index + 'value'}>{formatValues(value)}</td>)}</tr>;
  };

  return (
    <div>
      <TableTitle>COMPARING</TableTitle>
      <CompareTableDiv>
        <TableHead>
          <tr>
            <Column>{productName}</Column>
            <th></th>
            <Column>{relatedName}</Column>
          </tr>
        </TableHead>
        <TableBody>
          {tableData.map((row, index) => <TableRow row={row} key={index + 'row'}/> )}
        </TableBody>
      </CompareTableDiv>
    </div>

  );
};

export default CompareModalTable;

const TableTitle = styled.div`
border-radius: 10px 10px 0 0;
background: white;
text-align: left;
padding: .8em 0 .3em 1.5em;
float: inline-end;
`;

const CompareTableDiv = styled.table`
flex-direction: column;
font-size: larger;
min-width: 50vw;
height: 30vh;
text-align: center;
overflow: auto;
background: white;
border-radius: 0 0 10px 10px;
`;

const TableHead = styled.thead`
  position: sticky; //to make head stick so body can scroll if needed
  top: 0;
`;


const Column = styled.th`  //to fix product value columns as same width
  width: 36%
`;

const TableBody = styled.tbody`

`;

const Check = styled.i` // the check
  text-align: center;
  background: none;
  color: #0a0;
  &::after {
    font-family: FontAwesome;
    content: "\\f00c";
  }
`;
