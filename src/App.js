import React, { useEffect, useState } from "react";
import AppLoader from "./components/Loader/AppLoader";
import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import { useDispatch } from "react-redux";
import { checkLogin } from "./redux/actions";
import { errorToast } from "./Utils/Toast";
let Once = true;
const App = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (Once) {
      Once = false;
      setLoading(true);
      dispatch(checkLogin())
        .then(() => {
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
        });
    }
  }, []);
  return loading ? <AppLoader /> : <RouterProvider router={routes} />;
};
export default App;
