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
import Header from "../componants/Header";
import "./show.css";

const Show = () => {
  const param = useParams();
  const store = showStore();
  React.useEffect(() => {
    store.fetchData(param.id);
  }, []);

  if (!store.coinData.image) return <></>;
  return (
    <div className="coin-page">
      <div className="header">
        <Header back />
      </div>
      <div>
        <header className="coin-logo">
          <img src={store.coinData.image?.large} width={100} height={100} />
          <h1>
            {store.coinData.name} ({store.coinData.symbol})
          </h1>
        </header>
      </div>
      <div className="chart">
        <ResponsiveContainer width="100%" height={400}>
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
            <Area
              type="monotone"
              dataKey="price"
              stroke="#8884d8"
              fill="#8884d8"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="coin-info">
        <div className="text">
          <h3> Details </h3>
        </div>

        <div className="info">
          <h1 className="name">market cap </h1>

          <span className="price">{store.coinData.market_cap_rank} USD</span>
        </div>
        <hr />
        <div className="info">
          <h1 className="name">24 hours high</h1>
          <span className="price">
            {store.coinData.market_data.high_24h.usd}
          </span>
        </div>
        <hr />
        <div className="info">
          <h1 className="name">24 hours low </h1>
          <span className="price">
            {store.coinData.market_data.low_24h.usd}
          </span>
        </div>
        <hr />
        <div className="info">
          <h1 className="name">circulating supply </h1>
          <span className="price">
            {store.coinData.market_data.circulating_supply}
          </span>
        </div>
        <hr />
        <div className="info">
          <h1 className="name">current price </h1>
          <span className="price">
            {store.coinData.market_data.current_price.usd}
          </span>
        </div>
        <hr />
        <div className="info">
          <h1 className="name">1 year change </h1>
          <span className="price">
            {store.coinData.market_data.price_change_percentage_1y}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Show;
