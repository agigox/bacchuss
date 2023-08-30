import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Dash from "./dash";
import BacTable from "./dash/sub-dash/BacTable";
import BacPieChart from "./dash/sub-dash/BacPieChart";
import BacBarChart from "./dash/sub-dash/BacBarChart";
import { sumData } from "utils";
import {
  barColors2,
  barLabels2,
  dataBarChart2,
  dataTableHead2,
  dataTableRepar2,
  dataMaterialFMHT,
  dataMaterialFMBT,
  dataMaterialFMNS,
  pieColorsMaterialFM,
} from "utils/data/material";

const Material = () => {
  return (
    <Container>
      <Row className="page-row-1">
        <Col className="dash-1" md="6" sm="12">
          <Dash title="Répartition ANO FM par centre et par type (2022)">
            <BacTable
              data={[...dataTableRepar2, sumData(dataTableRepar2)]}
              dataHead={dataTableHead2}
            />
          </Dash>
        </Col>
        <Col className="dash-2" md="6" sm="12">
          <Dash title="Répartition ANO FM par type et par année">
            <BacBarChart
              data={dataBarChart2}
              colors={barColors2}
              labels={barLabels2}
              colmun={true}
            />
          </Dash>
        </Col>
      </Row>
      <Row className="page-row-2">
        <Col className="dash-3" md="4" sm="12">
          <Dash title="Répartition Anomalies FM HT par type (2022)">
            <BacPieChart
              data={dataMaterialFMHT}
              colors={pieColorsMaterialFM}
              displayLabel={false}
              displayValue={false}
              colmun={false}
            />
          </Dash>
        </Col>
        <Col className="dash-3" md="4" sm="12">
          <Dash title="Répartition Anomalies FM BT par type (2022)">
            <BacPieChart
              data={dataMaterialFMBT}
              colors={pieColorsMaterialFM}
              displayLabel={false}
              displayValue={false}
              colmun={false}
            />
          </Dash>
        </Col>
        <Col className="dash-3" md="4" sm="12">
          <Dash title="Répartition Anomalies FM Non Spécifié par type (2022)">
            <BacPieChart
              data={dataMaterialFMNS}
              colors={pieColorsMaterialFM}
              displayLabel={false}
              displayValue={false}
              colmun={false}
            />
          </Dash>
        </Col>
      </Row>
    </Container>
  );
};

export default Material;
