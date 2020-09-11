import React from "react";
import { VictoryPie } from "victory";

const Chart = () => {
  return (
    <svg viewBox="0 0 400 400">
      <VictoryPie
        standalone={false}
        data={[
          { x: "Car", y: 5200 },
          { x: "Food", y: 14400 },
          { x: "Self Care", y: 3700 },
          { x: "Entertainment", y: 25200 },
        ]}
        colorScale={["#d25925", "#e28b20", "#67b7d0", "#73ad57"]}
        labelRadius={70}
        style={{
          labels: { fill: "white", fontSize: 12 },
          data: {
            stroke: "#fff",
            strokeWidth: 1,
          },
          parent: {
            borderRadius: "50%",
            boxShadow: "6px 10px 18px rgba(1, 1, 0, 0.1)",
            padding: 0,
          },
        }}
      />
      <filter id="blurMe">
        <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
      </filter>
      <circle
        cx="200"
        cy="200"
        r="152"
        fill="none"
        stroke="black"
        strokeWidth={1}
        filter="url(#blurMe)"
      />
    </svg>
  );
};

export default Chart;
