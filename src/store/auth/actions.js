import axiosInstance from "../../plugins/axios";

export function signIn({ commit }, data) {
  return new Promise((resolve, reject) => {
    axiosInstance
      .post("auth", data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        axiosInstance.defaults.headers.common["Authorization"] =
          "Bearer " + res.data.token;
        commit("signIn", res.data);
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function sessionExpired({ commit }) {
  return new Promise((resolve) => {
    localStorage.removeItem("token");
    commit("sessionExpired");
    resolve();
  });
}
