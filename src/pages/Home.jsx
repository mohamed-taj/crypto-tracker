import React from "react";
import HomeStore from "../store/HomeStore";
import { Link } from "react-router-dom";
import Header from "../componants/Header";
import Alt from "./Alt";

import Trending from "./trending";

const Home = () => {
  const data = HomeStore();
  React.useEffect(() => {
    data.fetchCoins();
  }, []);
  return (
    <div className="flex flex-col items-center w-[100%] h-full ">
      <Header />
      <div className=" w-[95%] h-20 flex flex-col justify-center items-center ">
        <input
          type="text"
          value={data.query}
          onChange={data.setQuery}
          placeholder="search for a coin"
          className="w-full h-24 text-center text-xl rounded-2xl  border"
        />
      </div>
      <div className="w-[100%] flex flex-col items-center justify-center ">
        <div className="w-[95%] flex items-center mt-4 ">
          <h2 className="text-bold text-3xl py-5"> Trending coins</h2>
        </div>
        <div className=" w-[95%] grid grid-cols-5  gap-12 border-2 p-4 items-center justify-center rounded-xl">
          {data.coins.map((coin) => {
            return <Alt key={coin.id} coin={coin} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
