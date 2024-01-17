import React from "react";
import homeStore from "../store/HomeStore";
import { Link } from "react-router-dom";
const Home = () => {
  const data = homeStore();
  React.useEffect(() => {
    data.fetchCoins();
  }, []);
  return (
    <div>
      <input type="text" value={data.query} onChange={data.setQuery} />
      {data.coins.map((coin) => {
        return (
          <div key={coin.id}>
            <Link to={`/${coin.id}`}>{coin.name}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
