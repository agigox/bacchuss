import React from 'react'
import { Col, Row } from 'react-bootstrap';
import PieIndicator from './PieIndicator';

const Indicators = ({data, colmun, colors, displayValue}) => {
  return (
    <Row
          className={`flex-wrap pie-sub-1`}
          style={{ rowGap: "16px" }}
        >
          {data.map((item, index) => {
            return (
              <Col md={colmun ? "12" : "6"} key={index}>
                <PieIndicator
                  key={index}
                  item={item}
                  color={colors[index]}
                  displayValue={displayValue}
                />
              </Col>
            );
          })}
        </Row>
  )
}

export default Indicators