import { api, requestConfig } from "../utils/config";

const register = async (data) => {
  const config = requestConfig("POST", data);

  try {
    // console.log("Config em AuthServices" , config, api )
    const res = await fetch(api + "/users/register", config)
      .then((res) => res.json())
      .catch((err) => err);
    if (res._id) {
      localStorage.setItem("user", JSON.stringify(res));
    }
    return res;
  } catch (error) {
    console.log("error config em AuthService", error);
  }
};

const logout = () => {
  localStorage.removeItem("user");
};

// sign in user
const login = async (data) => {
  const config = requestConfig("POST", data);

  try {
    const res = await fetch(api + "/users/login", config)
      .then((res) => res.json())
      .catch((err) => err);

    if (res._id) {
      localStorage.setItem("user", JSON.stringify(res));
    }
    return res;
  } catch (error) {
    console.log(error);
  }
};
const authService = {
  register,
  logout,
  login,
};

export default authService;
