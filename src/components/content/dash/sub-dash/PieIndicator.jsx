import ChartLabel from 'components/shared/ChartLabel';
import React from 'react';
import { Animated } from 'react-animated-css';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
const StyledRow = styled(Row)`
  &.pie-indicator-row {
    .style-item {
      & > .col:nth-child(1) {
        flex-basis: 140px;
        white-space: break-spaces;
      }
    }
    align-items: center;
    & > .col {
      white-space: nowrap;
      &:nth-child(1) {
        flex-basis: 50px;
      }
      &:nth-child(2) {
        flex-basis: calc(100% - 50px);
      }
      
    }
  }
`;
const PieIndicator = ({item, color, displayValue}) => {
  const {name, value} = item;

  return (
    <Animated animationIn="zoomIn" animationInDuration={2000} >
      <StyledRow className={`pie-indicator-row`}>
        <Col className="pie-indicator-1">
          <ChartLabel color={color} />
        </Col>
        <Col className="pie-indicator-2 pie-label">
          <Row className="style-item">
            <Col>{name}</Col>
            {displayValue && <Col>{value.toLocaleString()}</Col>}
          </Row>
        
        </Col>
      </StyledRow>
    </Animated>
  );
};

export default PieIndicator;
