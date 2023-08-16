import React from 'react';
import { Col, Row, Table } from 'react-bootstrap';
import styled from 'styled-components';

const StyledRow = styled(Row)`
  .table {
    background: var(--bac-white);
    thead > tr > th:not(:last-child) {
      border-right: 2px solid var(--bac-gray);
    }
    .total-cell {
      & > td {
        background: var(--bac-blue);
        color: var(--bac-white);
      }
      box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.12);
      border-radius: 2px;
    }
  }
  .table > :not(caption) > * > * {
    border-bottom: 2px solid var(--bac-widgetBackground);
  }
`;
const BacTable = ({data, dataHead}) => {
  return (
    <StyledRow>
      <Col md={12}>
      <Table responsive>
      <thead>
        <tr>
          {dataHead.map((item, index) => <th key={index}>{item}</th>)}
        </tr>
      </thead>
      <tbody>
        
          {data.map((elt, index) => (
            <tr key={index} className={index === data.length - 1 ? 'total-cell' : ''}>
              {Object.keys(elt).map((keyName, keyIndex) => {
                return <td key={keyIndex}>{elt[keyName]}</td>
              })}
            </tr>
          ))}
      </tbody>
    </Table>
      </Col>
    </StyledRow>
  );
};

export default BacTable;