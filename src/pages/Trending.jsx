import React from "react";
import { Link } from "react-router-dom";

const Trending = ({ coin }) => {
  return (
    <div className="flex ">
      <Link
        to={`/${coin.id}`}
        className="flex w-full items-center justify-around p-4  border rounded-3xl hover:bg-gray-500/10 transition-200"
      >
        <div className="flex items-center justify-start w-[50%] space-x-4">
          <img src={coin.image} alt="" width={50} height={50} />
          <div>{coin.name}</div>
        </div>

        <div className="w-[30%]"> {coin.price}</div>
      </Link>
    </div>
  );
};

export default Trending;
