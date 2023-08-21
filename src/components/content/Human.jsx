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
  dataTableHeadH,
  dataTableReparH,
  dataHumainFMHT,
  dataHumainFMBT,
  dataHumainFMNS,
  pieColorsHumainFMHT,
  pieColorsHumainFMBT,
  pieColorsHumainFMNS,
} from "utils/data";

const Human = () => {
  return (
    <Container>
      <Row className="page-row-1" >
        <Col  md="6" sm="12">
          <Dash title="Répartitions Anomalies FM par centres">
            <BacTable
              data={[...dataTableReparH, sumData(dataTableReparH)]}
              dataHead={dataTableHeadH}
            />
          </Dash>
        </Col>
        <Col  md="6" sm="12">
          <Dash title="Evolution Anomalies FM">
            <BacBarChart
              data={dataBarChartH}
              colors={barColorsH}
              labels={barLabelsH}
            />
          </Dash>
        </Col>
      </Row>
      <Row className="page-row-2" >
        <Col className="dash-3" md="4" sm="12">
          <Dash title="Anomalies FM HT">
            <BacPieChart
              data={dataHumainFMHT}
              colors={pieColorsHumainFMHT}
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
              data={dataHumainFMBT}
              colors={pieColorsHumainFMBT}
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
              data={dataHumainFMNS}
              colors={pieColorsHumainFMNS}
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
