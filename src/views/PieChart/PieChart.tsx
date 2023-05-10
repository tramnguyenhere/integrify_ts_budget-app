import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

import { PieChartData, PieChartProps } from '../../types/PieChart';

const PieChart: React.FC<PieChartProps> = ({ data, width, height }) => {
  const ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    drawPieChart();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const drawPieChart = () => {
    const radius = Math.min(width, height) / 2;

    // Remove the old chart if it exists
    d3.select(ref.current).select("svg").remove();

    // Create an SVG element
    const svg = d3
      .select(ref.current)
      .append("svg")
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`);

    // Create a pie layout
    const pie = d3.pie<PieChartData>().value(d => d.value);

    // Create an arc generator
    const arc = d3.arc<d3.PieArcDatum<PieChartData>>().innerRadius(0).outerRadius(radius);

    // Create color scale
    const color = d3.scaleOrdinal(d3.schemeCategory10);

    // Draw the pie chart
    svg
      .selectAll(".arc")
      .data(pie(data))
      .enter()
      .append("path")
      .attr("class", "arc")
      .attr("d", arc)
      .attr("fill", (d, i) => color(i.toString()));

    // Add labels
    svg
      .selectAll(".label")
      .data(pie(data))
      .enter()
      .append("text")
      .attr("class", "label")
      .attr("transform", d => `translate(${arc.centroid(d as any)})`)
      .attr("dy", ".35em")
      .style("text-anchor", "middle")
      .text(d => d.data.label);
  };

  return (
    <div ref={ref as any}></div>
  );
};

export default PieChart;