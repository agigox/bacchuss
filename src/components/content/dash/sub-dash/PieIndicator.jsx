import ChartLabel from 'components/shared/ChartLabel';
import React from 'react';
import { Animated } from 'react-animated-css';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
const StyledRow = styled(Row)`
  &.pie-indicator-row {
    align-items: center;
    & > .col {
      &:nth-child(1) {
        flex-basis: 50px;
      }
      &:nth-child(2) {
        flex-basis: 180px;
        @media (min-width: 1860px) {
          flex-basis: 225px;
        }
        @media (max-width: 1400px) {
          flex-basis: ${props => props.value ? "160px" : "220px"};

        }
      }
      &:nth-child(3) {
        flex-basis: 70px;
      }
      
    }
  }
`;
const PieIndicator = ({item, color, displayValue}) => {
  const {name, value} = item;

  return (
    <Animated animationIn="zoomIn" animationInDuration={2000} >
    <StyledRow className={`pie-indicator-row`} value={displayValue && value}>
      <Col className="pie-indicator-1">
        <ChartLabel color={color} />
      </Col>
      <Col className="pie-indicator-2 pie-label">
      {name}
      </Col>
      {displayValue && value && <Col className="pie-indicator-3  pie-label">
      {value.toLocaleString() }
      </Col>}
    </StyledRow>
    </Animated>
  );
};

export default PieIndicator;
