import React from "react";
import { Link } from "react-router-dom";

const Trending = ({ coin }) => {
  return (
    <div className="trending-container">
      <div>
        <Link to={`/${coin.id}`} className="coins">
          <div className="coin-name">
            <img src={coin.image} alt="" width={50} height={50} />
            {coin.name}
          </div>

          <div className="coin-price">{coin.price}</div>
        </Link>
      </div>
      <hr />
    </div>
  );
};

export default Trending;
