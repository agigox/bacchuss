import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import BacTable from './dash/sub-dash/BacTable';
import BacPieChart from './dash/sub-dash/BacPieChart';
import BacLineChart from './dash/sub-dash/BacLineChart';
import Dash from './dash';
import { sumData } from 'utils';
import { colorsLine, dataAno, dataAnoEQ, dataPie, dataTable, dataTableHead, pieColors, ratioAno } from 'utils/data';

const StyledContainer = styled(Container)`
  .synthesis-row-1 {
    margin-bottom: 15px;
    column-gap: 16px;
    & > .dash-1, & > .dash-2 {
      flex-basis: calc(50% - 8px);
    }
  }
  .synthesis-row-2 {
    column-gap: 16px;
    & > .dash-1, & > .dash-2, & > .dash-3 {
      flex-basis: calc(33.3333% - 10.6666px);
    }
  }
`;
const Synthesis = () => {

  return (
    <StyledContainer>
      <Row className='synthesis-row-1'>
        <Col className="dash-1">
          <Dash title="Ratio Anomalies/EQF (12 derniers mois)">
            <BacPieChart data={dataPie} colors={pieColors} />
          </Dash>
        </Col>
        <Col className="dash-2">
          <Dash title="Synthèse des EQF et Ano par centre">
            <BacTable data={[...dataTable, sumData(dataTable)]} dataHead={dataTableHead} />
          </Dash>
        </Col>
      </Row>
      <Row className='synthesis-row-2'>
        <Col className="dash-3">
          <Dash title="Nombre Anomalie/EQF">
            <BacLineChart data={dataAno} colors={colorsLine}/>
          </Dash>
        </Col>
        <Col className="dash-3">
          <Dash title="Ratio Anomalies/EQF (12 derniers mois)">
            <BacLineChart data={ratioAno} colors={colorsLine}/>
          </Dash>
        </Col>
        <Col className="dash-3">
          <Dash title="Nombre Anomalie">
            <BacLineChart data={dataAnoEQ} colors={colorsLine}/>
          </Dash>
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default Synthesis;
