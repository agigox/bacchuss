import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import BacTable from './dash/sub-dash/BacTable';
import BacPieChart from './dash/sub-dash/BacPieChart';
import BacLineChart from './dash/sub-dash/BacLineChart';
import Dash from './dash';

const StyledContainer = styled(Container)`
  .synthesis-row-1 {
    margin-bottom: 15px;
    column-gap: 16px;
    & > .dash-1, & > .dash-2 {
      flex-basis: calc(50% - 8px);
    }
  }
  .synthesis-row-2 {
    column-gap: 16px;
    & > .dash-1, & > .dash-2, & > .dash-3 {
      flex-basis: calc(33.3333% - 10.6666px);
    }
  }
`;
const dataAno = [
  {
    "year": "2017",
    "Lille": 640,
    "Marseille": 1534,
    "Nantes": 1433,
    "Toulouse": 1864,
    "Lyon": 1191,
    "Nancy": 1335,
    "Paris": 598,
  },
  {
    "year": "2018",
    "Lille": 491,
    "Marseille": 865,
    "Nantes": 1288,
    "Toulouse": 1719,
    "Lyon": 1312,
    "Nancy": 1146,
    "Paris": 533,
  },
  {
    "year": "2019",
    "Lille": 500,
    "Marseille": 832,
    "Nantes": 1365,
    "Toulouse": 1856,
    "Lyon": 1004,
    "Nancy": 1285,
    "Paris": 667,
  },
  {
    "year": "2020",
    "Lille": 584,
    "Marseille": 1603,
    "Nantes": 1439,
    "Toulouse": 1915,
    "Lyon": 1357,
    "Nancy": 1217,
    "Paris": 574,
  },
  {
    "year": "2021",
    "Lille": 545,
    "Marseille": 1083,
    "Nantes": 1457,
    "Toulouse": 1676,
    "Lyon": 1059,
    "Nancy": 1234,
    "Paris": 601,
  },
  {
    "year": "2022",
    "Lille": 534,
    "Marseille": 1033,
    "Nantes": 1365,
    "Toulouse": 1856,
    "Lyon": 1221,
    "Nancy": 1285,
    "Paris": 667,
  }
];
const ratioAno = [
  {
    "year": "2017",
    "Lille": 530,
    "Marseille": 1201,
    "Nantes": 120,
    "Toulouse": 1664,
    "Lyon": 930,
    "Nancy": 1500,
    "Paris": 2000,
  },
  {
    "year": "2018",
    "Lille": 307,
    "Marseille": 1768,
    "Nantes": 500,
    "Toulouse": 1205,
    "Lyon": 901,
    "Nancy": 307,
    "Paris": 1980,
  },
  {
    "year": "2019",
    "Lille": 1231,
    "Marseille": 207,
    "Nantes": 1900,
    "Toulouse": 2000,
    "Lyon": 103,
    "Nancy": 222,
    "Paris": 702,
  },
  {
    "year": "2020",
    "Lille": 678,
    "Marseille": 980,
    "Nantes": 1986,
    "Toulouse": 290,
    "Lyon": 1300,
    "Nancy": 2019,
    "Paris": 402,
  },
  {
    "year": "2021",
    "Lille": 101,
    "Marseille": 206,
    "Nantes": 902,
    "Toulouse": 1398,
    "Lyon": 1400,
    "Nancy": 1590,
    "Paris": 1601,
  },
  {
    "year": "2022",
    "Lille": 500,
    "Marseille": 700,
    "Nantes": 900,
    "Toulouse": 1500,
    "Lyon": 1600,
    "Nancy": 1900,
    "Paris": 2000,
  }
]
const dataAnoEQ = [
  {
    "year": "2017",
    "Lille": 740,
    "Marseille": 1234,
    "Nantes": 1333,
    "Toulouse": 1464,
    "Lyon": 1591,
    "Nancy": 1635,
    "Paris": 1800,
  },
  {
    "year": "2018",
    "Lille": 576,
    "Marseille": 895,
    "Nantes": 1100,
    "Toulouse": 1419,
    "Lyon": 1612,
    "Nancy": 1746,
    "Paris": 1900,
  },
  {
    "year": "2019",
    "Lille": 510,
    "Marseille": 872,
    "Nantes": 1305,
    "Toulouse": 1856,
    "Lyon": 1004,
    "Nancy": 1985,
    "Paris": 2000,
  },
  {
    "year": "2020",
    "Lille": 100,
    "Marseille": 500,
    "Nantes": 900,
    "Toulouse": 1300,
    "Lyon": 1700,
    "Nancy": 1800,
    "Paris": 2000,
  },
  {
    "year": "2021",
    "Lille": 545,
    "Marseille": 1083,
    "Nantes": 1457,
    "Toulouse": 1676,
    "Lyon": 202,
    "Nancy": 1254,
    "Paris": 701,
  },
  {
    "year": "2022",
    "Lille": 789,
    "Marseille": 890,
    "Nantes": 990,
    "Toulouse": 1234,
    "Lyon": 1456,
    "Nancy": 1678,
    "Paris": 1900,
  }
];
const colorsLine = {
  Lille: "#009CDF",
  Marseille: "#4DA466",
  Nantes: "#9D50FF",
  Toulouse: "#7AE6ED",
  Lyon: "#FBA23A",
  Nancy: "#F0594A",
  Paris: "#3F51B5"
} 
const dataTable = [
  {"Centre": "Lille","NB_EQF": 534,"NB_ANO": 44,"ratio": 0.0824},
  {"Centre": "Lyon","NB_EQF": 1221,"NB_ANO": 168,"ratio": 0.1376},
  {"Centre":"Marseille","NB_EQF":1503,"NB_ANO":175,"ratio":0.1164},
  {"Centre":"Nancy","NB_EQF":1217,"NB_ANO":135,"ratio":0.1109},
  {"Centre":"Nantes","NB_EQF":1439,"NB_ANO":114,"ratio":0.0792},
  {"Centre":"Paris","NB_EQF":574,"NB_ANO":109,"ratio":0.1899},
  {"Centre":"Toulouse","NB_EQF":1915,"NB_ANO":249,"ratio":0.1300},
  {"Centre":"National","NB_EQF":8403,"NB_ANO":994,"ratio":0.1183},
];
const dataTableHead = ["Centres", "Nombre EQF", "Anomalies", "Ratio"];

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
const Synthesis = () => {

  return (
    <StyledContainer>
      <Row className='synthesis-row-1'>
        <Col className="dash-1">
          <Dash title="Ratio Anomalies/EQF (12 derniers mois)">
            <BacPieChart data={dataPie} colors={pieColors} />
          </Dash>
        </Col>
        <Col className="dash-2">
          <Dash title="Synthèse des EQF et Ano par centre">
            <BacTable data={dataTable} dataHead={dataTableHead}/>
          </Dash>
        </Col>
      </Row>
      <Row className='synthesis-row-2'>
        <Col className="dash-3">
          <Dash title="Nombre Anomalie/EQF">
            <BacLineChart data={dataAno} colors={colorsLine}/>
          </Dash>
        </Col>
        <Col className="dash-3">
          <Dash title="Ratio Anomalies/EQF (12 derniers mois)">
            <BacLineChart data={ratioAno} colors={colorsLine}/>
          </Dash>
        </Col>
        <Col className="dash-3">
          <Dash title="Nombre Anomalie">
            <BacLineChart data={dataAnoEQ} colors={colorsLine}/>
          </Dash>
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default Synthesis;
