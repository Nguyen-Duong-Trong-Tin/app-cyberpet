import { createStore } from "vuex";

import user from "./modules/user";
import pet from "./modules/pet";

export default createStore({
  modules: {
    user,
    pet
  }
})