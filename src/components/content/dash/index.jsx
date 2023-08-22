import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import styled from 'styled-components';
import Info from "images/info.svg"
import { ModalDash } from './sub-dash/ModalDash';
const StyledRow = styled(Row)`
    padding: 24px;
    &.dash-row {
        margin: 10px;
        row-gap: 32px;
        .dash-title {
            color: var(--bac-grayText);
            font-size: 24px;
            font-weight: 700;
            line-height: 32px;
            font-family: Open Sans;
            .dash-title-row {
                .col-title {
                    flex-basis: calc(100% - 30px);
                }
            }
        }
    }
`;
const Dash = ({title, children}) => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <StyledRow className="dash-row flex-column">
        <Col md={12} className="dash-title mb-2">
            <Row className='justify-content-between dash-title-row'>
                <Col className='col-title'>{title}</Col>
                <Col><img style={{cursor: "pointer"}} onClick={handleShow} src={Info} alt="info" /></Col>
            </Row>
            
        </Col>
        <Col md={12}>
            {children}
        </Col>
        <ModalDash show={show} handleClose={handleClose} title={title}/>
    </StyledRow>
  );
};

export default Dash;
