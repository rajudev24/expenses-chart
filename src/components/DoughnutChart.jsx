/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { numberWithCommas } from "../utils";

export default function DoughnutChart({ data, selectedPeriod, size, colors }) {
  const chartRef = useRef(null);

  const createSvgElement = (type, attributes) => {
    const element = document.createElementNS(
      "http://www.w3.org/2000/svg",
      type
    );
    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
    return element;
  };

  const clearChart = () => {
    chartRef.current.innerHTML = "";
  };

  const getSelectedData = () => {
    return data.find((periodData) => periodData.period === selectedPeriod);
  };

  const getCategories = (selectedData) => {
    return Object.keys(selectedData).filter(
      (key) => key !== "period" && key !== "total"
    );
  };

  const getTotal = (selectedData, categories) => {
    return (
      selectedData.total ||
      categories.reduce((acc, category) => acc + selectedData[category], 0)
    );
  };

  const drawSlices = (selectedData, categories, total) => {
    let startAngle = 0;
    const slices = categories.map((category, index) => {
      const categoryValue = selectedData[category];
      const percentage = (categoryValue / total) * 100;
      const endAngle = startAngle + (percentage * Math.PI * 2) / 100;

      const x1 = Math.cos(startAngle) * (size / 2) + size / 2;
      const y1 = Math.sin(startAngle) * (size / 2) + size / 2;
      const x2 = Math.cos(endAngle) * (size / 2) + size / 2;
      const y2 = Math.sin(endAngle) * (size / 2) + size / 2;

      const path = createSvgElement("path", {
        d: `M${size / 2} ${size / 2} L${x1} ${y1} A${size / 2} ${size / 2} 0 ${
          percentage > 50 ? 1 : 0
        } 1 ${x2} ${y2} Z`,
        fill: colors[index] || "#ccc",
      });

      startAngle = endAngle;
      return path;
    });

    slices.forEach((slice) => chartRef.current.appendChild(slice));
  };
  const drawChart = () => {
    clearChart();
    const selectedData = getSelectedData();
    if (!selectedData) {
      console.error(
        `Data not found for the selected period: ${selectedPeriod}`
      );
      return;
    }
    const categories = getCategories(selectedData);
    const total = getTotal(selectedData, categories);

    drawSlices(selectedData, categories, total);

    const centerCircle = createSvgElement("circle", {
      cx: size / 2,
      cy: size / 2,
      r: size / 3,
      fill: "#fff",
    });

    const totalText = createSvgElement("text", {
      x: size / 2,
      y: size / 2 + 5,
      "font-size": "30",
      "text-anchor": "middle",
      "font-weight": "700",
    });
    totalText.textContent = `$ ${numberWithCommas(total)}.00`;

    chartRef.current.appendChild(centerCircle);
    chartRef.current.appendChild(totalText);
  };

  useEffect(() => {
    drawChart();
  }, [data, colors, selectedPeriod, size]);

  return <svg ref={chartRef} width={size} height={size} />;
}
