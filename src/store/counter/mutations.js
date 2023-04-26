export const increment = (state) => {
  state.count++;
  state.lastMutation = "increment";
};
export const incrementBy = (state, payload) => {
  state.count += payload;
  state.lastMutation = "incrementBy " + payload;
  state.lastRandom = payload; // we actually don't need this
};
export const setLoading = (state, payload) => {
  state.isLoading = payload;
};
