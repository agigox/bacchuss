import React from 'react';
import { Col, Row, Tooltip } from 'react-bootstrap';
import { CartesianGrid, LineChart, XAxis, YAxis, Line, ResponsiveContainer } from 'recharts';
import styled from 'styled-components';
import Indicators from './Indicators';
const StyledRow = styled(Row)`
  &.bar-line-row {
    row-gap: 30px;
    .label-row {
      row-gap: 10px;
      .label-item:nth-child(odd) {
        flex-basis: 40%;
      }
      .label-item:nth-child(even) {
        flex-basis: 60%;
      }
      .label-item > .row {
        column-gap: 10px;
        align-items: center;
      }
    }
  }
  
`;

const BacLineChart = ({data, colors}) => {
  
  const dataInd = Object.keys(colors).map((item) => {
    return {name: item, values: 0}
  });
  const colorsInd = Object.entries(colors).map((item) => item[1]);
  
  return (
    <StyledRow className="bar-line-row flex-column">
      <Col>
        <ResponsiveContainer width="100%" height={208} className="responsive-container">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="25" vertical={false}/>
            <XAxis dataKey="year" tickLine={false} tickMargin={20}/>
            <YAxis type="number" axisLine={false} tickLine={false} ticks={[0, 600, 900, 1200, 1500, 1800, 2100]} tickMargin={20}/>
            <Tooltip cursor={{ stroke: 'red', strokeWidth: 2 }} />
            <Line type="basic" dataKey="Lille" stroke={colors['Lille']} strokeWidth={3} dot={false} animationDuration={2000} />
            <Line type="basic" dataKey="Marseille" stroke={colors['Marseille']} strokeWidth={3} dot={false} animationDuration={2000} />
            <Line type="basic" dataKey="Nantes" stroke={colors['Nantes']} strokeWidth={3} dot={false} animationDuration={2000} />
            <Line type="basic" dataKey="Toulouse" stroke={colors['Toulouse']} strokeWidth={3} dot={false} animationDuration={2000} />
            <Line type="basic" dataKey="Lyon" stroke={colors['Lyon']} strokeWidth={3} dot={false} animationDuration={2000} />
            <Line type="basic" dataKey="Nancy" stroke={colors['Nancy']} strokeWidth={3} dot={false} animationDuration={2000} />
            <Line type="basic" dataKey="Paris" stroke={colors['Paris']} strokeWidth={3} dot={false} animationDuration={2000} />
          </LineChart>
        </ResponsiveContainer>
      </Col>
      <Col>
        <Indicators data={dataInd} colmun={false} colors={colorsInd}  displayValue={false}/>
      </Col>
    </StyledRow>
  );
};

export default BacLineChart;
