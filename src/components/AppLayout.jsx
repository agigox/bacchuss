import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import NavBar from './nav-bar';
import Content from './content';
const StyledContainer = styled(Container)`
  height: 100vh;
  .appLayout-row {
    height: 100%;
    .appLayout-1 {
      background-color: var(--bac-blue);
      flex-basis: 70px;
      overflow: hidden;
    }
    .appLayout-2 {
      flex-basis: calc(100% - 70px);
    }
  }
`;
const AppLayout = () => {

  return (
    <StyledContainer>
      <Row className="appLayout-row">
        <Col className="appLayout-1">
          <NavBar />
        </Col>
        <Col className="appLayout-2">
          <Content />
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default AppLayout;
