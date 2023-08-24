import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BacTable from './dash/sub-dash/BacTable';
import BacPieChart from './dash/sub-dash/BacPieChart';
import BacLineChart from './dash/sub-dash/BacLineChart';
import Dash from './dash';
import { colorsLine, dataAno, dataAnoEQ, dataPie, dataTable, dataTableHead, pieColors, ratioAno } from 'utils/data';

const Synthesis = () => {

  return (
    <Container>
      <Row className='page-row-1'>
        <Col md="6">
          <Dash title="Ratio Anomalies/EQF (12 derniers mois)">
            <BacPieChart data={dataPie} colors={pieColors} />
          </Dash>
        </Col>
        <Col md="6">
          <Dash title="Synthèse des EQF et Ano par centre">
            <BacTable data={[...dataTable]} dataHead={dataTableHead} />
          </Dash>
        </Col>
      </Row>
      <Row className='page-row-2'>
        <Col  md="4" sm="12">
          <Dash title="Nombre Anomalie/EQF">
            <BacLineChart data={dataAno} colors={colorsLine}/>
          </Dash>
        </Col>
        <Col  md="4" sm="12">
          <Dash title="Ratio Anomalies/EQF (12 derniers mois)">
            <BacLineChart data={ratioAno} colors={colorsLine}/>
          </Dash>
        </Col>
        <Col  md="4" sm="12">
          <Dash title="Nombre Anomalie">
            <BacLineChart data={dataAnoEQ} colors={colorsLine}/>
          </Dash>
        </Col>
      </Row>
    </Container>
  );
};

export default Synthesis;
