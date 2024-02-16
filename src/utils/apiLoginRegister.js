export function authenticateUserData() {
  return { statuscode: 401 };
}

export function authenticateUser({ username, password }) {
  if (username === "suraj" && password === "gay") return { statuscode: 200 };
  else return { statuscode: 401 };
}
