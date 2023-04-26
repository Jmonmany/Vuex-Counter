import state from "./state";
import * as mutations from "./mutations";
import * as actions from "./actions";
import * as getters from "./getters";
const counterStore = {
  namespaced: true,
  //   state: () => ({
  //     count: 0,
  //     lastMutation: "none",
  //     isLoading: false,
  //     lastRandom: 0,
  //   }),
  // or only state, if you don't need to pass any arguments and has the same name
  state: state,
  //   mutations: {
  // like methods used to update the state
  // mutations are synchronous
  // increment(state) {
  //   state.count++;
  //   state.lastMutation = "increment";
  // },
  // incrementBy(state, payload) {
  //   state.count += payload;
  //   state.lastMutation = "incrementBy " + payload;
  //   state.lastRandom = payload; // we actually don't need this
  // },
  // setLoading(state, payload) {
  //   state.isLoading = payload;
  // },

  //   },
  mutations: mutations,
  //   actions: {
  //     // actions can be asynchronous and dispatch mutations
  //     async incrementRandomly(context) {
  //       context.commit("setLoading", true);
  //       const random = await getRandomly();
  //       context.commit("incrementBy", random);
  //       context.commit("setLoading", false);
  //     },
  //   },
  actions: actions,
  //   getters: {
  //     // getters are like computed properties for stores
  //     // they are cached based on their dependencies
  //     squareCount(state) {
  //       return state.count * state.count;
  //     },
  //   },
  getters: getters,
};
export default counterStore;
