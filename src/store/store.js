import { createStore } from "vuex";
import * as getters from "./getters";
import * as mutations from "./mutations";

const storage = {
  fetch() {
    const arr = [];
    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
      }
    }
    return arr;
  },
};

export default createStore({
  state: {
    todoItems: storage.fetch(),
  },
  getters: getters,
  mutations: mutations,
});
