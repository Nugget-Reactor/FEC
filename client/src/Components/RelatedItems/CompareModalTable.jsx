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
        tableObject[key].length === 1 && tableObject[key][0] === null) { //to eliminate when characteristic only has an ID but null value
        bothNull = true;
      }

      if (!bothNull) { //only renders characteristics if at least one of the values has a value other than null
        rowArray.push(tableObject[key][0]);
        rowArray.push(key);
        tableObject[key][1] ? rowArray.push(tableObject[key][1]) : rowArray.push(null);
        tableArray.push(rowArray);
      }
    }
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
    <TableDiv>
      <TableTitle>COMPARING</TableTitle>
      <CompareTable>
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
      </CompareTable>
    </TableDiv>

  );
};

export default CompareModalTable;

const TableDiv = styled.div`
`;

const TableTitle = styled.div`
border-radius: 10px 10px 0 0;
background: white;
text-align: left;
padding: .8em 0 .3em 1.5em;
float: inline-end;
`;

const CompareTable = styled.table`
overflow-y: auto;
flex-direction: column; //not sure how to make characteristics scrollable AND pretty
font-size: larger;
min-width: 50vw;
height: 30vh;
text-align: center;
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
top: 0;
font-size: larger;
overflow: scroll;
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