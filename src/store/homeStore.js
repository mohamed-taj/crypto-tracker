import axios from "axios";
import { create } from "zustand";
import debounce from "../../lib/debounce";

const homeStore = create((set) => ({
  coins: [],
  trending: [],
  query: "",
  setQuery: (e) => {
    set({ query: e.target.value });
    homeStore.getState().searchQuery();
  },
  searchQuery: debounce(async () => {
    const { query, trending } = homeStore.getState();
    if (query.length > 2) {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/search?query=${query}`
      );
      const data = await res.json();
      const coins = data.coins.map((coin) => {
        return {
          name: coin.name,
          symbol: coin.symbol,
          image: coin.large,
          id: coin.id,
        };
      });

      set({ coins });
    } else {
      set({ coins: trending });
    }
  }, 300),

  fetchCoins: async () => {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/search/trending "
    );
    const data = response.data.coins;
    const coins = data.map((coin) => {
      return {
        name: coin.item.name,
        symbol: coin.item.symbol,
        price: coin.item.price_btc,
        image: coin.item.large,
        id: coin.item.id,
      };
    });
    set({ coins: coins, trending: coins });
  },
}));
export default homeStore;
