const initialState = {
  auth: false,
  userData: {},
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOGIN":
      return {
        ...state,
        auth: true,
        userData: payload.userData,
      };
    case "LOGOUT": {
      return {
        auth: false,
        userData: null,
      };
    }

    default:
      return state;
  }
};

export default authReducer;
