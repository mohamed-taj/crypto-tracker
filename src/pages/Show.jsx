import React, { useEffect } from "react";
import { PureComponent } from "react";

import showStore from "../store/showStore";
import { useParams } from "react-router-dom";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Show = () => {
  const param = useParams();
  const store = showStore();
  React.useEffect(() => {
    store.fetchData(param.id);
  }, []);
  return (
    <div>
      <header>
        <h1> naame : {store.data}</h1>
      </header>
      <AreaChart
        width={500}
        height={400}
        data={store.graphData}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Date" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="price" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </div>
  );
};

export default Show;
