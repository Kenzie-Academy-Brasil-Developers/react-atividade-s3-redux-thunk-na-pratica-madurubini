const initialState = { name: "Madu", comments: [] };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_COMMENT":
      return action.updatedUser;

    default:
      return state;
  }
};

export default userReducer;
