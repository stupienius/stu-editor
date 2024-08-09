//import Vue from "vue";
import Vuex from "vuex";

//Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    path: null,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    setPath(state, { path }) {
      state.path = path;
      console.log(state.path);
    },
  },
});
