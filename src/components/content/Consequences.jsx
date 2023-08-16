import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import Dash from './dash';
import BacPieChart from './dash/sub-dash/BacPieChart';
import BacBarChart from './dash/sub-dash/BacBarChart';
import BacTable from './dash/sub-dash/BacTable';

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
const dataTableRepar = [
  {Centre: "Lille", CLOSEIN: 0, CLOSETR: 1, NOCLOSE: 7, NOOPEN: 1, OPENIN: 54, OPENTR: 2, WITHOUTCONSQ: 9},
  {Centre: "Lyon", CLOSEIN: 0, CLOSETR: 12, NOCLOSE: 16, NOOPEN: 1, OPENIN: 54, OPENTR: 2, WITHOUTCONSQ: 9},
  {Centre:"Marseille", CLOSEIN: 0, CLOSETR: 3, NOCLOSE: 11, NOOPEN: 1, OPENIN: 54, OPENTR: 2, WITHOUTCONSQ: 9},
  {Centre:"Nancy", CLOSEIN: 0, CLOSETR: 7, NOCLOSE: 3, NOOPEN: 1, OPENIN: 54, OPENTR: 2, WITHOUTCONSQ: 9},
  {Centre:"Nantes", CLOSEIN: 0, CLOSETR: 12, NOCLOSE: 11, NOOPEN: 1, OPENIN: 54, OPENTR: 2, WITHOUTCONSQ: 9},
  {Centre:"Paris", CLOSEIN: 0, CLOSETR: 13, NOCLOSE: 8, NOOPEN: 1, OPENIN: 54, OPENTR: 2, WITHOUTCONSQ: 9},
  {Centre:"Toulouse", CLOSEIN: 0, CLOSETR: 4, NOCLOSE: 7, NOOPEN: 1, OPENIN: 54, OPENTR: 2, WITHOUTCONSQ: 9},
];
const dataTableHead = ["Centres", "Fermeture intempestive", "Fermeture tardive", "Non fermeture", "Non ouverture", "Ouverture intempestive", "Ouverture tardive", "Sans conséquence"];
const Consequences = () => {

  return (
    <StyledContainer>
      <Row className='consequences-row-1'>
        <Col className="dash-1">
          <Dash title="Conséquences Anomalies">
            <BacPieChart data={dataPie} colors={pieColors} miniSize={true} />
          </Dash>
        </Col>
        <Col className="dash-1">
          <Dash title="Evolution Conséquences Anomalies">
            <BacBarChart data={dataBarChart} colors={barColors} labels={barLabels} />
          </Dash>
        </Col>
      </Row>
      <Row className='consequences-row-2'>
        <Col className="dash-1">
          <Dash title="Conséquences Anomalies par Centre">
            <BacTable data={dataTableRepar} dataHead={dataTableHead}/>
          </Dash>
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default Consequences;
