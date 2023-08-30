import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BacTable from './dash/sub-dash/BacTable';
import BacPieChart from './dash/sub-dash/BacPieChart';
import BacLineChart from './dash/sub-dash/BacLineChart';
import Dash from './dash';
import { colorsLine, dataAno, dataAnoEQ, dataPie, dataTable, dataTableHead, pieColors, ratioAno } from 'utils/data/synthesis';

const Synthesis = () => {

  return (
    <Container>
      <Row className='page-row-1'>
        <Col md="6">
          <Dash title="Part d’anomalies parmi les EQF (2022)">
            <BacPieChart data={dataPie} colors={pieColors} />
          </Dash>
        </Col>
        <Col md="6">
          <Dash title="Nombre d’EQF et d’ANO par centre">
            <BacTable data={[...dataTable]} dataHead={dataTableHead} />
          </Dash>
        </Col>
      </Row>
      <Row className='page-row-2'>
        <Col  md="4" sm="12">
          <Dash title="Nombre d’EQF par centre et par année">
            <BacLineChart data={dataAno} colors={colorsLine} ticks={[0, 200, 400, 600, 800, 1000, 1200, 1400, 1600, 1800, 2000]}/>
          </Dash>
        </Col>
        <Col  md="4" sm="12">
          <Dash title="Nombre d’ANO par centre et par année">
            <BacLineChart data={dataAnoEQ} colors={colorsLine} ticks={[0, 50, 100, 150, 200, 250, 300]}/>
          </Dash>
        </Col>
        <Col  md="4" sm="12">
          <Dash title="Ratio ANO/EQF par centre et par année">
            <BacLineChart data={ratioAno} colors={colorsLine} ticks={[0, 0.1, 0.15, 0.2, 0.25, 0.30, 0.35]}/>
          </Dash>
        </Col>
      </Row>
    </Container>
  );
};

export default Synthesis;
