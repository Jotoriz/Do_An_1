import React from "react";
import { PieChart, Pie, Cell, Legend } from "recharts";

const CustomPieChart = ({ data }) => {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884D8"];

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        dataKey="retail_price"
        nameKey="name"
        cx="50%"
        cy="50%"
        outerRadius={100}
        fill="#8884d8"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Legend align="center" />
    </PieChart>
  );
};

export default CustomPieChart;
