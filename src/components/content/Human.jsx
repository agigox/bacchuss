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
} from "utils/data/human";

const Human = () => {
  return (
    <Container>
      <Row className="page-row-1" >
        <Col md="6" sm="12">
          <Dash title="Répartition ANO FH par centre et par type (2022)">
            <BacTable
              data={[...dataTableReparH, sumData(dataTableReparH)]}
              dataHead={dataTableHeadH}
            />
          </Dash>
        </Col>
        <Col  md="6" sm="12">
          <Dash title="Répartition ANO FH par type et par année">
            <BacBarChart
              data={dataBarChartH}
              colors={barColorsH}
              labels={barLabelsH}
              colmun={true}
            />
          </Dash>
        </Col>
      </Row>
      <Row className="page-row-2" >
        <Col className="dash-3" md="4" sm="12">
          <Dash title="Répartition Anomalies FH HT par type (2022)">
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
          <Dash title="Répartition Anomalies FH BT par type (2022)">
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
          <Dash title="Répartition Anomalies FH ni BT ni HT par type (2022)">
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
