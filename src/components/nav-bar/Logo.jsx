import React from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import LogoIcon from 'images/navbar/logo.svg'
const StyledRow = styled(Row)`
  row-gap: 4px;
  padding: 8px;
  &.logo-row {
    .logo-col-1, .logo-col-2 {
      text-align: center;
    }
    .logo-col-2 {
      font-weight: 700;
    }
  }
`;
const Logo = () => {

  return (
    <StyledRow className="logo-row flex-column">
        <Col className='logo-col-1'>
          <img src={LogoIcon} alt="Logo" />
        </Col>
        <Col className="logo-col-2">
          Bacchus
        </Col>
    </StyledRow>
  );
};

export default Logo;
