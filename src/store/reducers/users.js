import actionsTypes from "../actions/types";

const store = {
  userConnected: null
};

function usersReducer(state = store, action) {
  const newStore = { ...state };

  if (action.type === actionsTypes.users.POPULATE_USER) {
    newStore.userConnected = action.data;
    return newStore;
  }

  return newStore;
}

export default usersReducer;
