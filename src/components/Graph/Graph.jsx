import React from "react";
import { VictoryPie } from "victory";
import {
  graphBox,
} from "./Graph.module.css";


const Graph = ({filteredData }) => {

  const data = filteredData.map(({category, categoryAmount}) => ({x: category, y: categoryAmount}));

 const colorFromDate = filteredData.map(({color})=> (color));
 
  return (
    
      <div className={graphBox}>
        <svg viewBox="0 0 1400 1400">
          <VictoryPie
            standalone={false}
            width={1400}
            height={1400}
            data={data}
            labelRadius={280}
            style={{
              labels: { fontSize: 40, fill: "white" },
              data: { stroke: "#fff", strokeWidth: 2 },
            }}
          colorScale = {colorFromDate}
          />
        </svg>
      </div>
  );
};

export default Graph;
