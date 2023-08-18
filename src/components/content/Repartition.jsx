import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Dash from './dash';
import BacPieChart from './dash/sub-dash/BacPieChart';
import BacTable from './dash/sub-dash/BacTable';
import BacBarChart from './dash/sub-dash/BacBarChart';
import { sumData } from 'utils';
import { barColors, barLabels, dataBarChart, dataPie1, dataTableHead1, dataTableRepar1, pieColors1 } from 'utils/data';

const Repartition = () => {

  return (
    <Container>
      <Row className='page-row-1'>
        <Col md="6">
          <Dash title="Répartition Anomalies">
            <BacPieChart data={dataPie1} colors={pieColors1}/>
          </Dash>
        </Col>
        <Col md="6">
          <Dash title="Evolution Anomalies">
            <BacBarChart data={dataBarChart} colors={barColors} labels={barLabels} />
          </Dash>
        </Col>
      </Row>
      <Row className='page-row-2'>
        <Col md="6">
          <Dash title="Répartition anomalie par catégorie et par centre">
            <BacTable data={[...dataTableRepar1, sumData(dataTableRepar1)]} dataHead={dataTableHead1}/>
          </Dash>
        </Col>
      </Row>
    </Container>
  );
};

export default Repartition;
