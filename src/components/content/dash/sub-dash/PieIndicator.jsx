import ChartLabel from 'components/shared/ChartLabel';
import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
const StyledRow = styled(Row)`
  &.pie-indicator-row {
    &.fade-in {
      opacity: 0.2;
    }
    &.fade-in-demi {
      opacity: 0.6;
    }
    &.fade-out {
      opacity: 1;
    }
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
const FADE_INTERVAL_MS = 2000;
const PieIndicator = ({item, color}) => {
  const {name, value} = item;
  const [fadeProp, setFadeProp] = useState('fade-in');
  useEffect(() => {
    setTimeout(() => {
      setFadeProp('fade-in-demi');
    }, FADE_INTERVAL_MS / 2);
    setTimeout(() => {
      setFadeProp('fade-out');
    }, FADE_INTERVAL_MS);
  }, [])
  return (
    <StyledRow className={`pie-indicator-row ${fadeProp}`}>
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
