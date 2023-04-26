<template>
  <div>
    <h1>Counter - Vuex</h1>
    <h2>{{ isLoading ? "Loading..." : "" }}</h2>
    <h2>Direct - Access: {{ $store.state.counter.count }}</h2>
    <h2>Computed: {{ countComputed }}</h2>
    <h2>Computed - mapState - count: {{ count }}</h2>
    <h2>Computed - mapState - lastMutation: {{ lastMutation }}</h2>
    <button @click="IncrementCount">+1</button>
    <button @click="IncrementCountBy">+5</button>
    <button
      @click="IncrementCountByRandom"
      :disabled="isLoading"
      :class="isLoading ? 'button-disabled' : 'button-enabled'"
    >
      Random
    </button>
    <h3>Direct getter: {{ $store.getters['counter/squareCount'] }}</h3>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "CounterComponent",

  computed: {
    countComputed() {
      return this.$store.state.counter.count;
    },
    // ...mapState('counter',['count', 'lastMutation']) usefull when you want to use it as it is
    ...mapState("counter", {
      count: (state) => state.count,
      // usefull when you want to rename the state
      lastMutation: "lastMutation",
      // lastMutation: (state) => state.lastMutation,
      // another way to write the same thing
      isLoading: "isLoading",
    }),
  },
  methods: {
    IncrementCount() {
      this.$store.commit("counter/increment");
      // we call the mutation increment with the commit method
    },
    IncrementCountBy() {
      this.$store.commit("counter/incrementBy", 5);
      // we call the mutation incrementBy with the commit method
      // this.IncrementCountByRandom(), since we are using mapActions we have access to this,
      // so it will be incremented by 5 and then by a random number 1 second later
    },
    // IncrementCountByRandom() {
    //   this.$store.dispatch("incrementRandomly");
    //   // we call the mutation incrementByRandom with the commit method
    // },
    ...mapActions("counter", {
      // here we can "rename" the action to be used in the component
      // and we can also call another action from here like in IncrementCountBy()
      IncrementCountByRandom: "incrementRandomly",
      // in this component we fire IncrementCountByRandom() and
      // it will call the action incrementRandomly()
    }),
    // ...mapActions(["incrementRandomly"]), like mapState in computed,
    // will not work since we are not using the same name
  },
};
</script>

<style scoped>
button {
  margin: 5px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid black;
  cursor: pointer;
}
.button-enabled {
  background-color: green;
  color: white;
}
.button-disabled {
  cursor: not-allowed;
  background-color: red;
  color: white;
}
</style>
