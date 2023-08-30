import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Dash from './dash';
import BacPieChart from './dash/sub-dash/BacPieChart';
import BacTable from './dash/sub-dash/BacTable';
import BacBarChart from './dash/sub-dash/BacBarChart';
import { sumData } from 'utils';
import { barColors, barLabels, dataBarChart, dataPie, dataTableHead, dataTableRepar, pieColors } from 'utils/data/repartition';

const Repartition = () => {

  return (
    <Container>
      <Row className='page-row-1'>
        <Col md="6">
          <Dash title="Répartition Anomalies (2022)">
            <BacPieChart data={dataPie} colors={pieColors} displayValue={false} />
          </Dash>
        </Col>
        <Col md="6">
          <Dash title="Répartition Anomalies par année">
            <BacBarChart data={dataBarChart} colors={barColors} labels={barLabels} colmun={true}/>
          </Dash>
        </Col>
      </Row>
      <Row className='page-row-2'>
        <Col md="6">
          <Dash title="Répartition Anomalies par centre et par catégorie (2022)">
            <BacTable data={[...dataTableRepar, sumData(dataTableRepar)]} dataHead={dataTableHead}/>
          </Dash>
        </Col>
      </Row>
    </Container>
  );
};

export default Repartition;
