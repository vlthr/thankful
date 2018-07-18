import { Database } from '../../../lib/db.js';

let db = new Database();

const state = {
  metamaskStatusError: null,
};

db.getCreators().then(creators => {
  state.creators = creators;
});

const getters = {};

const actions = {};

const mutations = {
  // eslint-disable-next-line no-shadow
  setMetamaskStatusError: (state, error) => {
    state.metamaskStatusError = error;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
