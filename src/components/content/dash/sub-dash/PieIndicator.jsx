import ChartLabel from 'components/shared/ChartLabel';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
const StyledRow = styled(Row)`
  &.pie-indicator-row {
    & > .col {
      &:nth-child(1) {
        flex-basis: 50px;
      }
      &:nth-child(2) {
        flex-basis: 160px;
      }
      &:nth-child(3) {
        flex-basis: 70px;
      }
      
    }
  }
`;
const PieIndicator = ({item, color}) => {
  const {name, value} = item;
  return (
    <StyledRow className="pie-indicator-row">
      <Col className="pie-indicator-1">
        <ChartLabel color={color} />
      </Col>
      <Col className="pie-indicator-2 pie-label">
      {name}
      </Col>
      {value && <Col className="pie-indicator-3  pie-label">
      {value.toLocaleString() }
      </Col>}
    </StyledRow>
  );
};

export default PieIndicator;
