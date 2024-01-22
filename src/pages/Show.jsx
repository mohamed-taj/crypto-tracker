import React, { useEffect } from "react";
import { PureComponent } from "react";

import ShowStore from "../store/showStore";

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
import Footer from "../componants/Footer";

const Show = () => {
  const param = useParams();
  const store = ShowStore();
  React.useEffect(() => {
    store.fetchData(param.id);
  }, []);

  if (!store.coinData.image) return <></>;
  return (
    <div className="flex flex-col h-screen ">
      <div className="flex w-full justify-center">
        <Header back />
      </div>
      <div className=" flex items-center justify-center my-6 w-full">
        <div className="flex items-center gap-6">
          <img src={store.coinData.image?.large} width={100} height={100} />
          <h1>
            {store.coinData.name} ({store.coinData.symbol})
          </h1>
        </div>
      </div>
      <div className="flex  m-6 p-4 border-2 rounded-2xl shadow-2xl shadow-blue-500/20">
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
      <div className="flex flex-col m-6 p-4 border-2 rounded-xl shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] ">
        <div className="mb-8">
          <h3 className="text-2xl font-bold"> Details </h3>
        </div>
        <div className="flex flex-col  ">
          <div className="w-[30%] flex my-6 p-4 justify-between items-center ">
            <h1 className=" font-bold text-xl">market cap: </h1>

            <span className="">{store.coinData.market_cap_rank} USD</span>
          </div>
          <hr />
          <div className="w-[30%] flex my-6 p-4 justify-between items-center ">
            <h1 className="font-bold text-xl">24 hours high</h1>
            <span className="">{store.coinData.market_data.high_24h.usd}</span>
          </div>
          <hr />
          <div className="w-[30%] flex my-6 p-4 justify-between items-center">
            <h1 className="font-bold text-xl">24 hours low </h1>
            <span className="">{store.coinData.market_data.low_24h.usd}</span>
          </div>
          <hr />
          <div className="w-[30%] flex my-6 p-4 justify-between items-center ">
            <h1 className="font-bold text-xl">circulating supply </h1>
            <span className="">
              {store.coinData.market_data.circulating_supply}
            </span>
          </div>
          <hr />
          <div className="w-[30%] flex my-6 p-4 justify-between items-center ">
            <h1 className="font-bold text-xl">current price </h1>
            <span className="">
              {store.coinData.market_data.current_price.usd}
            </span>
          </div>
          <hr />
          <div className="w-[30%] flex my-6 p-4 justify-between items-center">
            <h1 className="font-bold text-xl">1 year change </h1>
            <span className="">
              {store.coinData.market_data.price_change_percentage_1y}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Show;
