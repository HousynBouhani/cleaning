import AuthContext from "./authContext";
import authReducer from "./authReducer";
import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  AUTH_ERROR,
  USER_LOADED,
  LOGOUT,
} from "../types";
import { useReducer } from "react";
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    isAuthenticated: null,
    errors: null,
    user: null,
    loading: true,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  //login
  const login = async (formData) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    try {
      const response = await axios.post("/api/auth", formData, config);

      dispatch({
        type: LOGIN_SUCCESS,
        payload: response.data,
      });
      loadUser();
    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
        payload: error.response.data.msg,
      });
    }
  };

  //load user
  const loadUser = async () => {

    setAuthToken(localStorage.token);

    try {
      const response = await axios.get("/api/auth");
      dispatch({
        type: USER_LOADED,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: AUTH_ERROR
      });
    }
  };

  //logout
  const logout = () => {
    dispatch({ type: LOGOUT });
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        errors: state.errors,
        user: state.user,
        loading: state.loading,
        login,
        loadUser,
        logout,
       
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
