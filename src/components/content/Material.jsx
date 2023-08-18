import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Dash from './dash';
import BacTable from './dash/sub-dash/BacTable';
import BacPieChart from './dash/sub-dash/BacPieChart';
import BacBarChart from './dash/sub-dash/BacBarChart';
import { sumData } from 'utils';
import { barColors2, barLabels2, dataBarChart2, dataPie2, dataTableHead2, dataTableRepar2, pieColors2 } from 'utils/data';

const Material = () => {

  return (
    <Container>
      <Row className='page-row-1'>
        <Col md="6">
          <Dash title="Répartitions Anomalies FM par centres">
            <BacTable data={[...dataTableRepar2, sumData(dataTableRepar2)]} dataHead={dataTableHead2}/>
          </Dash>
        </Col>
        <Col md="6">
          <Dash title="Evolution Anomalies FM">
            <BacBarChart data={dataBarChart2} colors={barColors2} labels={barLabels2} />
          </Dash>
        </Col>
      </Row>
      <Row className='page-row-2'>
        <Col md="4" sm="12">
          <Dash title="Anomalies FM HT">
            <BacPieChart data={dataPie2} colors={pieColors2} displayLabel={false} displayValue={false} colmun={false}/>
          </Dash>
        </Col>
        <Col md="4" sm="12">
          <Dash title="Anomalies FM BT">
            <BacPieChart data={dataPie2} colors={pieColors2} displayLabel={false} displayValue={false} colmun={false}/>
          </Dash>
        </Col>
        <Col md="4" sm="12">
          <Dash title="Anomalies FM NS">
            <BacPieChart data={dataPie2} colors={pieColors2} displayLabel={false} displayValue={false} colmun={false}/>
          </Dash>
        </Col>
      </Row>
    </Container>
  );
};

export default Material;
