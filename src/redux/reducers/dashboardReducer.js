const initialState = {
  data: null,
};

const dashboardReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "DASHBOARD_DATA":
      return {
        ...state,
        data: payload.dashboardData,
      };
    case "REMOVE_DASHBOARD":
      return {
        ...state,
        data: null,
      };
    default:
      return state;
  }
};

export default dashboardReducer;
