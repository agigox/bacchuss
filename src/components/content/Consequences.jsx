import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import Dash from './dash';
import BacPieChart from './dash/sub-dash/BacPieChart';
import BacBarChart from './dash/sub-dash/BacBarChart';
import BacTable from './dash/sub-dash/BacTable';
import { sumData } from 'utils';
import { barColorsC, barLabelsC, dataBarChartC, dataPieC, dataTableHeadC, dataTableReparC, pieColorsC } from 'utils/data';

const StyledContainer = styled(Container)`
  .consequences-row-1 {
    margin-bottom: 15px;
  }
  .consequences-row-1, .consequences-row-2 {
    column-gap: 16px;
    & > .dash-1 {
      flex-basis: calc(50% - 8px);
    }
  }
`;

const Consequences = () => {

  return (
    <StyledContainer>
      <Row className='consequences-row-1'>
        <Col className="dash-1">
          <Dash title="Conséquences Anomalies">
            <BacPieChart data={dataPieC} colors={pieColorsC} />
          </Dash>
        </Col>
        <Col className="dash-1">
          <Dash title="Evolution Conséquences Anomalies">
            <BacBarChart data={dataBarChartC} colors={barColorsC} labels={barLabelsC} />
          </Dash>
        </Col>
      </Row>
      <Row className='consequences-row-2'>
        <Col className="dash-1">
          <Dash title="Conséquences Anomalies par Centre">
            <BacTable data={[...dataTableReparC, sumData(dataTableReparC)]} dataHead={dataTableHeadC}/>
          </Dash>
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default Consequences;
