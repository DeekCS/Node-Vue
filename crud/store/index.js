// holds your root state
export const state = () => ({
  users: [],
});

// contains your mutations
export const mutations = {
  setUsers(state, value) {
    state.users = value;
  },
};
// contains your actions
export const actions = {
  async fetchUsers({ commit }) {
    const response = await fetch("http://localhost:4444/users/1");
    console.log(response+ "batata");
    const users = response.json();
    commit('setUsers', users);
  },
};

// your root getters
export const getters = {
  myGetter(state) {
    return state.counter + 1000;
  },
};
