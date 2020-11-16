// router DOM
import setAuthToken from "./utils/setAuthToken";
import AllRoutes from "./routes/AllRoutes";
import { BrowserRouter as Router } from "react-router-dom";

// context
import AuthContext from "./context/auth/authContext";
import { useContext, useEffect } from "react";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  const authContext = useContext(AuthContext);

  const { loadUser } = authContext;

  useEffect(() => {
    loadUser();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Router>
      <AllRoutes />
    </Router>
  );
};

export default App;
