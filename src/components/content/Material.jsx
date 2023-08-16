import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import Dash from './dash';
import BacTable from './dash/sub-dash/BacTable';
import BacPieChart from './dash/sub-dash/BacPieChart';
import BacBarChart from './dash/sub-dash/BacBarChart';
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
const dataTableRepar = [
  {"Centre": "Lille","BT": 36,"NS": 2,"Autres": 2},
  {"Centre": "Lyon","BT": 0,"NS": 12,"Autres": 16},
  {"Centre":"Marseille","BT": 0,"NS": 3,"Autres": 11},
  {"Centre":"Nancy","BT": 0,"NS": 7,"Autres": 3},
  {"Centre":"Nantes","BT": 0,"NS": 12,"Autres": 11},
  {"Centre":"Paris","BT": 0,"NS": 13,"Autres": 8},
  {"Centre":"Toulouse","BT": 0,"NS": 4,"Autres": 7},
];
const dataTableHead = ["Centres", "BT", "NS", "HT"];
const dataPie = [
  {
    "name": "Anomalies FH",
    "value": 8146
  },
  {
    "name": "Anomalies FM",
    "value": 1313
  },
  {
    "name": "Anomalies AE",
    "value": 355
  }
];
const pieColors = ['#7AE6ED', '#009CDF', '#9D50FF'];
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
const Material = () => {

  return (
    <StyledContainer>
      <Row className='material-row-1'>
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
      <Row className='material-row-2'>
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

export default Material;
