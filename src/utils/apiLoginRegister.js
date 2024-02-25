export function authenticatedUserData() {
  const data = { error: false, message: "Please login" };
  return data;
}

export function authenticateUser({ username, password }) {
  if (username === "sharad" && password === "gay") return { error: false };
  else throw new Error("Provided username or password is wrong");
}
