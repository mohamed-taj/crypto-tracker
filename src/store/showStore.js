import axios from "axios";
import { create } from "zustand";

const showStore = create((set) => ({
  graphData: [],
  fetchData: async (id) => {
    const [coinData, graphRes] = await Promise.all([
      await axios.get(`https://api.coingecko.com/api/v3/coins/${id}?tickers=true&market_data=true
        `),
      await axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=1000
        `),
    ]);

    const res = graphRes.data.prices.map((price) => {
      const [timestamp, p] = price;
      const date = new Date(timestamp).toLocaleDateString("en-US");

      return {
        Date: date,
        price: p,
      };
    });
    set({ graphData: res });
    console.log(coinData);
  },
}));
export default showStore;
