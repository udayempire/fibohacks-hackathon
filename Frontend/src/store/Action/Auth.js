import axios from "../../../Axios/axios";
import {
  isFail,
  isRequest,
  isUserFail,
  isUserRequest,
  isUserSuccess,
  userLoginFail,
  userLoginRequest,
  userLoginSuccess,
  userLogoutSuccess,
  userNotificationSuccess,
  userRegisterFail,
  userRegisterRequest,
  userRegisterSuccess,
} from "../Reducer/Auth";

export const userLogin = (info) => async (dispatch) => {
  dispatch(userLoginRequest());
  try {
    const { data } = await axios.post("/user/signin", info);
    localStorage.setItem("myCozeetoken", data.token);
    dispatch(userLoginSuccess(data));
  } catch (error) {
    dispatch(userLoginFail(error.response.data));
  }
};
export const isUser = (info) => async (dispatch) => {
  dispatch(isUserRequest());
  try {
    const { data } = await axios.get("/user/user");
    dispatch(isUserSuccess(data));
  } catch (error) {
    dispatch(isUserFail(error.response.data));
  }
};

export const userRegister = (info) => async (dispatch) => {
  dispatch(userRegisterRequest());
  try {
    const { data } = await axios.post("/user/register", info);
    localStorage.setItem("eventifytoken", data.token);

    dispatch(userRegisterSuccess(data));
  } catch (error) {
    dispatch(userRegisterFail(error.response.data));
  }
};
export const userLogout = (info) => async (dispatch) => {
  dispatch(isRequest());
  try {
    const { data } = await axios.get("/user/logout");
    localStorage.removeItem("eventifytoken");
    dispatch(userLogoutSuccess(data));
  } catch (error) {
    dispatch(isFail(error.response.data));
  }
};


