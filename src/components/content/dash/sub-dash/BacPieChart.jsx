import React from "react";
import { Col, Row } from "react-bootstrap";
import { Pie, PieChart, Cell, ResponsiveContainer, Tooltip } from "recharts";
import styled from "styled-components";
import PieIndicator from "./PieIndicator";

const renderCustomizedLabel = (props, colors) => {
  const { cx, cy, midAngle, innerRadius, outerRadius, percent, index } = props;
  const RADIAN = Math.PI / 180;
  const radius = 25 + innerRadius + (outerRadius - innerRadius);
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill={colors[index]}
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
      className="percent-pie"
    >
      {percent.toFixed(2) * 100}%
    </text>
  );
};
const StyledRow = styled(Row)`
  &.pie-chart-row {
    row-gap: ${({colmun}) => colmun ? 0 : 32}px;
    @media (max-width: 1200px) {
      flex-wrap: wrap;
      justify-content: center;
    }
    .pie-chart-item-1,
    .pie-chart-item-2 {
      flex-basis: 50%;
    }
    .pie-chart-item-2 {
      align-self: center;
    }
  }
`;
const BacPieChart = ({
  data,
  colors,
  displayLabel = true,
  displayValue = true,
  colmun = true,
}) => {
  return (
    <StyledRow
      className={`${colmun ? "pie-chart-row" : "pie-chart-row flex-column"}`}
      colmun={colmun}
    >
      <Col className="pie-chart-item-1">
        <ResponsiveContainer width={colmun ? 340 : 208} height={colmun ? 340 : 208} className="responsive-container">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={displayLabel}
              label={(props) =>
                displayLabel ? renderCustomizedLabel(props, colors) : null
              }
              outerRadius={colmun ? 137 : 102}
              innerRadius={colmun ? 90 : 60}
              startAngle={90}
              endAngle={450}
              paddingAngle={0}
              fill="#8884d8"
              dataKey="value"
              animationBegin={0}
              animationDuration={2000}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index]}
                  strokeWidth={4}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </Col>
      <Col className="pie-chart-item-2">
        <Row
          className={`flex-wrap ${colmun ? "flex-colmun" : "flex-row"}`}
          style={{ rowGap: "16px" }}
        >
          {data.map((item, index) => {
            return (
              <Col md={`${colmun ? "12" : "6"}`} key={index}>
                <PieIndicator
                  key={index}
                  item={item}
                  color={colors[index]}
                  displayValue={displayValue}
                />
              </Col>
            );
          })}
        </Row>
      </Col>
    </StyledRow>
  );
};

export default BacPieChart;
