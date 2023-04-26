import Vue from "vue";
import Vuex from "vuex";
import getRandomly from ".././helpers/getRandom";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    lastMutation: "none",
    isLoading: false,
    lastRandom: 0,
  },
  mutations: {
    // like methods used to update the state
    // mutations are synchronous
    increment(state) {
      state.count++;
      state.lastMutation = "increment";
    },
    incrementBy(state, payload) {
      state.count += payload;
      state.lastMutation = "incrementBy " + payload;
      state.lastRandom = payload; // we actually don't need this
    },
    setLoading(state, payload) {
      state.isLoading = payload;
    },
  },
  actions: {
    // actions can be asynchronous and dispatch mutations
    async incrementRandomly(context) {
      context.commit("setLoading", true);
      const random = await getRandomly();
      context.commit("incrementBy", random);
      context.commit("setLoading", false);
    },
  },
});
