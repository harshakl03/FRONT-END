export function authenticatedUserData() {
  const data = { error: true, message: "Please login" };
  return data;
}

export function authenticateUser({ username, password }) {
  if (username === "suraj" && password === "gay") return { error: false };
  else throw new Error("Provided username or password is wrong");
}
