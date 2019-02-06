export default {
  'LOGIN_ERR': (state, err) => {
    state.loginErr = err;
  },
  'REG_ERR': (state, err) => {
    state.regErr = err;
  }
};
