import Vue from "vue";
import Vuex from "vuex";
import counterStore from "./counter/index";
// import getRandomly from ".././helpers/getRandom";
Vue.use(Vuex);

export default new Vuex.Store({
  // state: {
  //   count: 0,
  //   lastMutation: "none",
  //   isLoading: false,
  //   lastRandom: 0,
  // },
  // mutations: {
  //   // like methods used to update the state
  //   // mutations are synchronous
  //   increment(state) {
  //     state.count++;
  //     state.lastMutation = "increment";
  //   },
  //   incrementBy(state, payload) {
  //     state.count += payload;
  //     state.lastMutation = "incrementBy " + payload;
  //     state.lastRandom = payload; // we actually don't need this
  //   },
  //   setLoading(state, payload) {
  //     state.isLoading = payload;
  //   },
  // },
  // actions: {
  //   // actions can be asynchronous and dispatch mutations
  //   async incrementRandomly(context) {
  //     context.commit("setLoading", true);
  //     const random = await getRandomly();
  //     context.commit("incrementBy", random);
  //     context.commit("setLoading", false);
  //   },
  // },
  // getters: {
  //   // getters are like computed properties for stores
  //   // they are cached based on their dependencies
  //   squareCount(state) {
  //     return state.count * state.count;
  //   },
  // },
  modules: {
    counter: counterStore,
  },
});

// EXPLANATION
// Getters: Getters are used to retrieve computed properties from the state.
// You should use getters when you want to transform or filter data from the state before using it in your components.
// For example, if you have a list of todos in your state, you could use a getter to filter the completed todos.

// Mutations: Mutations are used to update the state.
// You should use mutations when you want to update the state synchronously.
// For example, if you have a form with input fields,
// you could use a mutation to update the state with the input values when the form is submitted.

// Actions: Actions are used to perform asynchronous operations and then commit mutations to update the state.
// You should use actions when you want to perform an operation that takes time,
// such as an HTTP request or a long-running computation.
// For example, if you have a search feature that retrieves data from an API,
// you could use an action to perform the API request and then commit a mutation to update the state with the search results.
