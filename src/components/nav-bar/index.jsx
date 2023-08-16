import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import Menu from './Menu';
import Logo from './Logo';
const StyledRow = styled(Row)`
  &.navbar-row {
    row-gap: 32px;
  }
`;
const NavBar = () => {

  return (
    <StyledRow className="navbar-row flex-column">
        <Col>
          <Logo />
        </Col>
        <Col>
          <Menu />
        </Col>
    </StyledRow>
  );
};

export default NavBar;
