import React from 'react';
import { Animated } from 'react-animated-css';
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
    <Animated animationIn="zoomIn" animationInDuration={2000}>
      <StyledRow>
        <Col md={12}>
        <Table responsive>
        <thead>
          <tr>
            {dataHead.map((item, index) => <th key={index}>{item}</th>)}
          </tr>
        </thead>
        <tbody>
          
            {data.map((elt, index) => {
              const isLast = index === data.length - 1;
              return (
              <tr key={index} className={isLast ? 'total-cell' : ''}>
                
                {Object.keys(elt).map((keyName, keyIndex) => {
                  return (
                  <td key={keyIndex}>
                    {keyName === 'ratio' ? `${((isLast ? (elt['NB_ANO'] / elt['NB_EQF']) : elt[keyName]) * 100).toFixed(1)}%` : elt[keyName]}
                  </td>
                  )
                })}
              </tr>
            )})}
        </tbody>
      </Table>
        </Col>
      </StyledRow>
    </Animated>
  );
};

export default BacTable;
