import axios from "axios";
import { create } from "zustand";

const ShowStore = create((set) => ({
  graphData: [],
  coinData: [],
  fetchData: async (id) => {
    const [coins, graphRes] = await Promise.all([
      await axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}?&market_data=true
        `
      ),
      await axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=1000
        `
      ),
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
    set({ coinData: coins.data });
  },
}));
export default ShowStore;
