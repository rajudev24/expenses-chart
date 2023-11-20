import { useRef } from "react";

export default function DoughnutChart() {
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

  return <div>DoughnutChart</div>;
}
