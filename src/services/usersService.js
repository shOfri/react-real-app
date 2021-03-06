import httpService from "./httpService";
import config from "../config.json";
import jwtDecode from "jwt-decode";

const TOKEN_KEY = "token";

httpService.setDefaultCommonHeaders("x-auth-token", getJwt());

export function createUser(user) {
  return httpService.post(`${config.apiUrl}/users`, user);
}

export async function login(email, password) {
  const { data } = await httpService.post(`${config.apiUrl}/auth`, {
    email,
    password,
  });

  return localStorage.setItem(TOKEN_KEY, data.token);
}

export async function getLoggedUser() {
  const user = await httpService.get(`${config.apiUrl}/users/me`);

  return Object(user.data);
}

export function getJwt() {
  return localStorage.getItem(TOKEN_KEY);
}

export function logout() {
  return localStorage.removeItem(TOKEN_KEY);
}

export function getUser() {
  try {
    const token = getJwt();
    return jwtDecode(token);
  } catch {
    return null;
  }
}

const usersService = {
  createUser,
  login,
  getJwt,
  logout,
  getUser,
  getLoggedUser,
};

export default usersService;
