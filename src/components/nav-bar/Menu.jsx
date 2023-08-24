import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import MenuItem from './MenuItem';
import Home from 'images/navbar/menu/home.svg';
import Consequences from 'images/navbar/menu/consequences.svg';
import Repartition from 'images/navbar/menu/repartition.svg';
import Material from 'images/navbar/menu/material.svg';
import Human from 'images/navbar/menu/human.svg';
const menuItems = [
  {icon: Home, title: "Synthèse", height: 59, route: '/'},
  {icon: Repartition, title: "Répart...", height: 59, route: '/repartition'},
  {icon: Human, title: "ANO FH", height: 59, route: '/ano-fh'},
  {icon: Material, title: "ANO FM", height: 59, route: '/ano-fm'},
  {icon: Consequences, title: "Conséq...", height: 59, route: '/consequences'},
]
const StyledRow = styled(Row)`
  .separator {
    height: 0px;
    border: 1px solid var(--bac-white);
  }
`;
const Menu = () => {

  return (
    <StyledRow className="flex-column">
      {menuItems.map((item, index) => {
        return (
          <Col key={index}>
            <Row  className="flex-column">
              <Col>
                
                  <MenuItem {...item} />
              </Col>
              {item.active && <Col className="separator" />}
            </Row>
          </Col>
        )
      })}
        
    </StyledRow>
  );
};

export default Menu;
