const getters = {
  name: state => state.user.name,
  token: state => state.user.token,
  sidebar: state => state.user.sidebar,
  visitedViews: state => state.tagsView.visitedViews,
  avatar: state => state.user.avatar
};

export default getters;
