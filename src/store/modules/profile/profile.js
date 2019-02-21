import getters from './getters';
import actions from './actions';
import mutations from './mutations';
const state = {
  dataUser: {},
  auth: false,
  city: ''
};
export default {
  state,
  getters,
  actions,
  mutations
};
