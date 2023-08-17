import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import Dash from './dash';
import BacTable from './dash/sub-dash/BacTable';
import BacPieChart from './dash/sub-dash/BacPieChart';
import BacBarChart from './dash/sub-dash/BacBarChart';
import { sumData } from 'utils';
import { barColors2, barLabels2, dataBarChart2, dataPie2, dataTableHead2, dataTableRepar2, pieColors2 } from 'utils/data';
const StyledContainer = styled(Container)`
.material-row-1 {
  margin-bottom: 15px;
  column-gap: 16px;
  & > .dash-1, & > .dash-2 {
    flex-basis: calc(50% - 8px);
  }
}
.material-row-2 {
  column-gap: 16px;
  & > .dash-1, & > .dash-2, & > .dash-3 {
    flex-basis: calc(33.3333% - 10.6666px);
  }
}
`;
const Material = () => {

  return (
    <StyledContainer>
      <Row className='material-row-1'>
        <Col className="dash-1">
          <Dash title="Répartitions Anomalies FM par centres">
            <BacTable data={[...dataTableRepar2, sumData(dataTableRepar2)]} dataHead={dataTableHead2}/>
          </Dash>
        </Col>
        <Col className="dash-2">
          <Dash title="Evolution Anomalies FM">
            <BacBarChart data={dataBarChart2} colors={barColors2} labels={barLabels2} />
          </Dash>
        </Col>
      </Row>
      <Row className='material-row-2'>
        <Col className="dash-3">
          <Dash title="Anomalies FM HT">
            <BacPieChart data={dataPie2} colors={pieColors2} miniSize={true} />
          </Dash>
        </Col>
        <Col className="dash-3">
          <Dash title="Anomalies FM BT">
            <BacPieChart data={dataPie2} colors={pieColors2} miniSize={true} />
          </Dash>
        </Col>
        <Col className="dash-3">
          <Dash title="Anomalies FM NS">
            <BacPieChart data={dataPie2} colors={pieColors2} miniSize={true} />
          </Dash>
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default Material;
