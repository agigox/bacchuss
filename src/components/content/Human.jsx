import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import Dash from './dash';
import BacTable from './dash/sub-dash/BacTable';
import BacBarChart from './dash/sub-dash/BacBarChart';
import BacPieChart from './dash/sub-dash/BacPieChart';
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
const dataTableRepar = [
  {"Centre": "Lille","HT": 0,"BT": 2,"Autres": 2},
  {"Centre": "Lyon","HT": 0,"BT": 12,"Autres": 16},
  {"Centre":"Marseille","HT": 0,"BT": 3,"Autres": 11},
  {"Centre":"Nancy","HT": 0,"BT": 7,"Autres": 3},
  {"Centre":"Nantes","HT": 0,"BT": 12,"Autres": 11},
  {"Centre":"Paris","HT": 0,"BT": 13,"Autres": 8},
  {"Centre":"Toulouse","HT": 0,"BT": 4,"Autres": 7},
];
const dataTableHead = ["Centres", "HT", "BT", "Autres"];
const dataBarChart = [
  {
    year: '2017',
    FH: 390,
    FM: 750,
    AE: 755,
  },
  {
    year: '2018',
    FH: 550,
    FM: 950,
    AE: 969,
  },
  {
    year: '2019',
    FH: 430,
    FM: 940,
    AE: 960,
  },
  {
    year: '2020',
    FH: 490,
    FM: 498,
    AE: 1005,
  },
  {
    year: '2021',
    FH: 520,
    FM: 1010,
    AE: 1060,
  },
  {
    year: '2022',
    FH: 210,
    FM: 410,
    AE: 415,
  }
];
const barLabels = [
  {
    "name": "Anomalies FH type BT"
  },
  {
    "name": "Anomalies FM type HT"
  },
  {
    "name": "Anomalies AE ni BT ni HT"
  }
];
const barColors = ['#7AE6ED', '#009CDF', '#9D50FF'];
const dataPie = [
  {
    "name": "EQF (hors anomalies)",
    "value": 92518
  },
  {
    "name": "Anomalies",
    "value": 13707
  }
];
const pieColors = ['#7AE6ED', '#009CDF'];
const Human = () => {

  return (
    <StyledContainer>
      <Row className='human-row-1'>
        <Col className="dash-1">
          <Dash title="Répartitions Anomalies FM par centres">
            <BacTable data={dataTableRepar} dataHead={dataTableHead}/>
          </Dash>
        </Col>
        <Col className="dash-2">
          <Dash title="Evolution Anomalies FM">
          <BacBarChart data={dataBarChart} colors={barColors} labels={barLabels} />
          </Dash>
        </Col>
      </Row>
      <Row className='human-row-2'>
        <Col className="dash-3">
          <Dash title="Anomalies FM HT">
            <BacPieChart data={dataPie} colors={pieColors} miniSize={true} />
          </Dash>
        </Col>
        <Col className="dash-3">
          <Dash title="Anomalies FM BT">
            <BacPieChart data={dataPie} colors={pieColors} miniSize={true} />
          </Dash>
        </Col>
        <Col className="dash-3">
          <Dash title="Anomalies FM NS">
            <BacPieChart data={dataPie} colors={pieColors} miniSize={true} />
          </Dash>
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default Human;
