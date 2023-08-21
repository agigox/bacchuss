import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { Bar, BarChart, CartesianGrid, Tooltip, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { styled } from 'styled-components';
import PieIndicator from './PieIndicator';
import useDeviceDetect from 'utils/useDeviceDetect';
const StyledRow = styled(Row)`
    &.bar-chart-row {
        column-gap: 64px;
        @media (max-width: 1400px) {
          column-gap: 0;
          flex-wrap: wrap;
          justify-content: center;
        }
        .bar-chart-item-1, .bar-chart-item-2 {
            flex-basis: 50%;
        }
        .bar-chart-item-2 {
            align-self:center;
        }
        .custom-tooltip {
            width: 300px;
            background:rgba(255,255,255, 0.9);
            padding: 15px;
            
            .year {
              font-weight: bold;
              font-size: 16px;
              margin-bottom: 10px;
            }
            .value-label {
              font-weight: bold;
              font-size: 14px;
                & > .col: nth-child(1){
                    flex-basis: 175px;
                }
            }
        }
    }
    .pie-chart-item-1,
    .pie-chart-item-2 {
      flex-basis: 50%;
    }
    .pie-chart-item-2 {
      align-self: center;
    }
    .custom-tooltip {
      width: 200px;
      background: rgba(255, 255, 255, 0.9);
      padding: 15px;
      .value-label {
        &>.col: nth-child(1) {
          flex-basis: 100px;
        }
      }
    }
  }
`;
  const CustomTooltip = ({ active, payload, label, labels }) => {
    if (active && payload && payload.length) {
      return (
        <Row className="custom-tooltip flex-column">
          <Col className="year">{`Année ${label}`}</Col>
          <Col>
            <Row className="flex-column">
            {payload.map(({color, name, value}, index) => {
                return (<Col key={index} style={{color}}>
                    <Row className="value-label">
                        <Col>{labels[index].name}</Col>
                        <Col>{value}</Col>
                    </Row>
                </Col>)
            })}
          </Row>
        </Col>
      </Row>
    );
  }

  return null;
};
const BacBarChart = ({data, colors, labels}) => {
  const isFull = useDeviceDetect(1400);
  return (
    <StyledRow className='bar-chart-row'>
      <Col className='bar-chart-item-1'>
        <ResponsiveContainer width={350} height={isFull ? 308 : 400} className="responsive-container">
            <BarChart data={data} margin={{top: 0, right: 0, left: 0, bottom: 24 }}>
              <CartesianGrid strokeDasharray="25" vertical={false} />
              <XAxis dataKey="year" tickLine={false} tickMargin={5} />
              <YAxis type="number" axisLine={false} tickLine={false} tickMargin={5}/>
              <Tooltip content={<CustomTooltip labels={labels}/>} />
              <Bar dataKey="FH" stackId="a" barSize={32} fill={colors[0]} animationDuration={2000} />
              <Bar dataKey="FM" stackId="a" barSize={32} fill={colors[1]} animationDuration={2000} />
              <Bar dataKey="AE" stackId="a" barSize={32} fill={colors[2]} animationDuration={2000} />
            </BarChart>
        </ResponsiveContainer>
      </Col>
      <Col className='bar-chart-item-2'>
        <Row className="flex-column" style={{rowGap: '16px'}}>
        {labels.map((item, index) => {
          return <Col key={index}><PieIndicator key={index} item={item} color={colors[index]} /></Col>
        })}
        </Row>
      </Col>
    </StyledRow>
  );
};

export default BacBarChart;
