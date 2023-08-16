import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { NavLink } from "react-router-dom";
const StyledNavLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  display: block;
  &.active {
    border-bottom: 2px solid var(--bac-white);
    .menuItem-row {
      background-color: var(--bac-darkBlue);
    }
  }
  .menuItem-row {
    padding: 8px;
    height: ${(props) => {
      return props.height;
    }}px;
    .menu-item-2 {
      color: var(--bac-white);
    }
  }
`;
const MenuItem = ({icon, title, route, height}) => {
  return (
    <StyledNavLink to={route} className={({ isActive }) => isActive ? 'active' : ''} height={height}>
      <Row className={`flex-column menuItem-row`}>
          <Col className="text-center">
              <img src={icon} alt={icon} />
          </Col>
          <Col className="text-center text-break menu-item-2">
              {title}
          </Col>
      </Row>
    </StyledNavLink>
  );
};

export default MenuItem;
