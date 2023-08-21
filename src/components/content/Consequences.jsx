import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Dash from "./dash";
import BacPieChart from "./dash/sub-dash/BacPieChart";
import BacBarChart from "./dash/sub-dash/BacBarChart";
import BacTable from "./dash/sub-dash/BacTable";
import { sumData } from "utils";
import {
  barLabelsCEvAnomaly,
  dataBarChartCEvAnomaly,
  pieColorsCEvAnomaly,
  dataPieCAnomaly,
  dataTableHeadC,
  dataTableReparC,
  pieColorsCAnomaly,
} from "utils/data";

const Consequences = () => {
  return (
    <Container>
      <Row className="page-row-1">
        <Col md="6">
          <Dash title="Conséquences Anomalies">
            <BacPieChart
              data={dataPieCAnomaly}
              colors={pieColorsCAnomaly}
              displayLabel={false}
              displayValue={false}
            />
          </Dash>
        </Col>
        <Col md="6">
          <Dash title="Evolution Conséquences Anomalies">
            <BacBarChart
              data={dataBarChartCEvAnomaly}
              colors={pieColorsCEvAnomaly}
              labels={barLabelsCEvAnomaly}
            />
          </Dash>
        </Col>
      </Row>
      <Row className="page-row-2">
        <Col md="6">
          <Dash title="Conséquences Anomalies par Centre">
            <BacTable
              data={[...dataTableReparC, sumData(dataTableReparC)]}
              dataHead={dataTableHeadC}
            />
          </Dash>
        </Col>
      </Row>
    </Container>
  );
};

export default Consequences;
