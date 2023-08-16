import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import Download from "images/download.svg";
import { Outlet } from 'react-router-dom';
const StyledRow = styled(Row)`
  &.content-row {
    .content-1 {
      border-bottom: 1px solid #CCC8CA;
      flex-basis: 80px;
      padding: 16px;
      img {
        margin-right: 8px;
      }
    }
    .content-2 {
      padding: 16px;
    }
  }
`;
const Content = () => {

  return (
    <StyledRow className="content-row flex-column">
      <Col className="content-1 text-end">
        <Button bsPrefix="btn-bac" variant="primary">
          <img src={Download} alt="download" />Exporter les données
        </Button>
      </Col>
      <Col className="content-2">
            <Outlet />
      </Col>
    </StyledRow>
  );
};

export default Content;
