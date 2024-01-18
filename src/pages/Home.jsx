import React from "react";
import HomeStore from "../store/HomeStore";
import { Link } from "react-router-dom";
import Header from "../componants/Header";
import "./home.css";
import Trending from "./trending";

const Home = () => {
  const data = HomeStore();
  React.useEffect(() => {
    data.fetchCoins();
  }, []);
  return (
    <div className="container">
      <Header />
      <header className="search-bar">
        <h2>Search for a coin </h2>
        <input type="text" value={data.query} onChange={data.setQuery} />
      </header>
      <div className="trending">
        <h2> Trending coins</h2>
        {data.coins.map((coin) => {
          return <Trending key={coin.id} coin={coin} />;
        })}
      </div>
    </div>
  );
};

export default Home;
