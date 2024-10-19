export function setToken(data) {
  localStorage.setItem("us_access", JSON.stringify(data.accessToken));
  localStorage.setItem("us_refresh", JSON.stringify(data.refreshToken));
}

export function removeToken() {
  localStorage.removeItem("us_access");
  localStorage.removeItem("us_refresh");
}
