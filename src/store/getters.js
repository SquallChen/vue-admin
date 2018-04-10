const getters = {
  name: state => state.user.name,
  token: state => state.user.token,
  sidebar: state => state.user.sidebar
};

export default getters;
