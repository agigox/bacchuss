import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Dash from "./dash";
import BacTable from "./dash/sub-dash/BacTable";
import BacBarChart from "./dash/sub-dash/BacBarChart";
import BacPieChart from "./dash/sub-dash/BacPieChart";
import { sumData } from "utils";
import {
  barColorsH,
  barLabelsH,
  dataBarChartH,
  pieColorsFM,
  dataTableHeadH,
  dataTableReparH,
  dataFMHT,
  dataFMBT,
  dataFMNS,
} from "utils/data";

const Human = () => {
  return (
    <Container>
      <Row className="page-row-1" noGutters>
        <Col md="6">
          <Dash title="Répartitions Anomalies FM par centres">
            <BacTable
              data={[...dataTableReparH, sumData(dataTableReparH)]}
              dataHead={dataTableHeadH}
            />
          </Dash>
        </Col>
        <Col md="6">
          <Dash title="Evolution Anomalies FM">
            <BacBarChart
              data={dataBarChartH}
              colors={barColorsH}
              labels={barLabelsH}
            />
          </Dash>
        </Col>
      </Row>
      <Row className="page-row-2" noGutters>
        <Col md="4" sm="12">
          <Dash title="Anomalies FM HT">
            <BacPieChart
              data={dataFMHT}
              colors={pieColorsFM}
              miniSize={true}
              displayLabel={false}
              displayValue={false}
              colmun={false}
            />
          </Dash>
        </Col>
        <Col md="4" sm="12">
          <Dash title="Anomalies FM BT">
            <BacPieChart
              data={dataFMBT}
              colors={pieColorsFM}
              miniSize={true}
              displayLabel={false}
              displayValue={false}
              colmun={false}
            />
          </Dash>
        </Col>
        <Col md="4" sm="12">
          <Dash title="Anomalies FM NS">
            <BacPieChart
              data={dataFMNS}
              colors={pieColorsFM}
              miniSize={true}
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

export default Human;
