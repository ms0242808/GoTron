const state = {
  isInited: false,
  isAuthed: false,
  email: '',
  name: '',
  // role: '',
  // brand: '',
  // location: [],
  // selected: '',
  // accType: false
};
const getters = {
  getEmail: state => {
    return state.email
  },
  getAuthState: state => {
    return state.isAuthed
  },
  getUsername: state => {
    return state.name
  },
  // getRole: state => {
  //   return state.role
  // },
  // getLocation: state => {
  //   return state.brand + "-" + state.selected
  // },
  // getLocationList:state => {
  //   return state.location
  // },
  // getAccType:state => {
  //   return state.accType
  // },
};
const actions = {
};
const mutations = {
  authStateChanged(state, user){
    state.isAuthed = Boolean(user);
    state.isInited = true;
    if(user !== null && user !== undefined){
      state.email = user.attributes.email;
      state.name = user.username;
    }
  }
};
export default {
  state,
  getters,
  actions,
  mutations
}