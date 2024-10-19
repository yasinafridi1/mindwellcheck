const initialState = {
  auth: false,
  userData: null,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOGIN":
      return {
        ...state,
        auth: true,
        userData: payload.data,
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
