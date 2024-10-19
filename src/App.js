import React, { useState } from "react";
import AppLoader from "./components/Loader/AppLoader";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";

const App = () => {
  const [loading, setLoading] = useState(false);
  return loading ? <AppLoader /> : <RouterProvider router={routes} />;
};
export default App;
