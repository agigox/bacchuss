import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import Dash from './dash';
import BacPieChart from './dash/sub-dash/BacPieChart';
import BacTable from './dash/sub-dash/BacTable';
import BacBarChart from './dash/sub-dash/BacBarChart';
import { sumScores } from 'utils';
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
const dataTableRepar = [
  {"Centre": "Lille","FH": 4,"FM": 80,"AE": 4},
  {"Centre": "Lyon","FH": 28,"FM": 166,"AE": 10},
  {"Centre":"Marseille","FH": 14,"FM": 152,"AE": 9},
  {"Centre":"Nancy","FH": 10,"FM": 187,"AE": 13},
  {"Centre":"Nantes","FH": 23,"FM": 181,"AE": 28},
  {"Centre":"Paris","FH": 21,"FM": 157,"AE": 18},
  {"Centre":"Toulouse","FH": 11,"FM": 235,"AE": 16},
];
// const scores = sumScores([...dataTableRepar]);
const dataTableHead = ["Centres", "FH", "FM", "AE"];
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
    "name": "Anomalies FH"
  },
  {
    "name": "Anomalies FM"
  },
  {
    "name": "Anomalies AE"
  }
];
const barColors = ['#7AE6ED', '#009CDF', '#9D50FF'];
const Repartition = () => {
  
  console.log(dataTableRepar)
  // console.log(scores)
  return (
    <StyledContainer>
      <Row className='repartition-row-1'>
        <Col className="dash-1">
          <Dash title="Répartition Anomalies">
            <BacPieChart data={dataPie} colors={pieColors}/>
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
            <BacTable data={dataTableRepar} dataHead={dataTableHead}/>
          </Dash>
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default Repartition;
