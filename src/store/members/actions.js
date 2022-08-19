/* eslint-disable no-unused-vars */
import axiosInstance from "../../plugins/axios";

export function getMembers({ commit }) {
  return new Promise((resolve, reject) => {
    axiosInstance
      .get("api/members")
      .then((res) => {
        commit("updateMembers", res.data);
        resolve(res);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

export function addMember({ commit }, member) {
  return new Promise((resolve, reject) => {
    axiosInstance
      .post("api/members", member)
      .then((res) => {
        commit("addMember", res.data);
        resolve(res.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
