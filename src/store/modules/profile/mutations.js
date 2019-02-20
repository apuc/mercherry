export default {
  'DATA_USER': (state, data) => state.dataUser = data,
  'DATA_USER_CITY': (state, data) => state.dataUser.city = data,
  'USER_AVATAR': (state, avatar) => state.dataUser.avatar = avatar,
  'AUTH': (state, auth) => state.auth = auth
};
