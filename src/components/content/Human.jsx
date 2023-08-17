import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import Dash from './dash';
import BacTable from './dash/sub-dash/BacTable';
import BacBarChart from './dash/sub-dash/BacBarChart';
import BacPieChart from './dash/sub-dash/BacPieChart';
import { sumData } from 'utils';
import { barColorsH, barLabelsH, dataBarChartH, dataPieH, dataTableHeadH, dataTableReparH, pieColorsH } from 'utils/data';
const StyledContainer = styled(Container)`
  .human-row-1 {
    margin-bottom: 15px;
    column-gap: 16px;
    & > .dash-1, & > .dash-2 {
      flex-basis: calc(50% - 8px);
    }
  }
  .human-row-2 {
    column-gap: 16px;
    & > .dash-1, & > .dash-2, & > .dash-3 {
      flex-basis: calc(33.3333% - 10.6666px);
    }
  }
`;

const Human = () => {

  return (
    <StyledContainer>
      <Row className='human-row-1'>
        <Col className="dash-1">
          <Dash title="Répartitions Anomalies FM par centres">
            <BacTable data={[...dataTableReparH, sumData(dataTableReparH)]} dataHead={dataTableHeadH}/>
          </Dash>
        </Col>
        <Col className="dash-2">
          <Dash title="Evolution Anomalies FM">
          <BacBarChart data={dataBarChartH} colors={barColorsH} labels={barLabelsH} />
          </Dash>
        </Col>
      </Row>
      <Row className='human-row-2'>
        <Col className="dash-3">
          <Dash title="Anomalies FM HT">
            <BacPieChart data={dataPieH} colors={pieColorsH} miniSize={true} />
          </Dash>
        </Col>
        <Col className="dash-3">
          <Dash title="Anomalies FM BT">
            <BacPieChart data={dataPieH} colors={pieColorsH} miniSize={true} />
          </Dash>
        </Col>
        <Col className="dash-3">
          <Dash title="Anomalies FM NS">
            <BacPieChart data={dataPieH} colors={pieColorsH} miniSize={true} />
          </Dash>
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default Human;
