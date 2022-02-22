// holds your root state
export const state = () => ({
  users: [],
});

// contains your mutations
export const mutations = {
  setUsers(state, value) {
    state.users = value;
  },
   addUser(state, value) {
     console.log("newval", value )
    state.users.push(value);
  },
};
// contains your actions
export const actions = {
  async fetchUsers({ commit }) {
    const response = await fetch("http://localhost:4444/users/");
    console.log(response+ "batata");
    const users = response.json();
    commit('setUsers', users);
  },

  //create user action
  async createUser({ commit }, user) {
    const response = await fetch("http://localhost:4444/users/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    console.log(response);
    const newUser = await response.json();
    commit("addUser", newUser);
  },

};

// your root getters
export const getters = {
  myGetter(state) {
    return state.counter + 1000;
  },
};
