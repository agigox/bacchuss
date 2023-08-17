import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import Dash from './dash';
import BacPieChart from './dash/sub-dash/BacPieChart';
import BacTable from './dash/sub-dash/BacTable';
import BacBarChart from './dash/sub-dash/BacBarChart';
import { sumData } from 'utils';
import { barColors, barLabels, dataBarChart, dataPie1, dataTableHead1, dataTableRepar1, pieColors1 } from 'utils/data';
const StyledContainer = styled(Container)`
.repartition-row-1 {
  margin-bottom: 15px;
}
  .repartition-row-1, .repartition-row-2 {
    column-gap: 16px;
    & > .dash-1 {
      flex-basis: calc(50% - 8px);
    }
  }
`;

const Repartition = () => {

  return (
    <StyledContainer>
      <Row className='repartition-row-1'>
        <Col className="dash-1">
          <Dash title="Répartition Anomalies">
            <BacPieChart data={dataPie1} colors={pieColors1}/>
          </Dash>
        </Col>
        <Col className="dash-1">
          <Dash title="Evolution Anomalies">
            <BacBarChart data={dataBarChart} colors={barColors} labels={barLabels} />
          </Dash>
        </Col>
      </Row>
      <Row className='repartition-row-2'>
        <Col className="dash-1">
          <Dash title="Répartition anomalie par catégorie et par centre">
            <BacTable data={[...dataTableRepar1, sumData(dataTableRepar1)]} dataHead={dataTableHead1}/>
          </Dash>
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default Repartition;
