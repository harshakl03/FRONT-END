export async function authenticatedUserData() {
  const res = await fetch("http://localhost:3000/auth/secret", {
    credentials: "include",
  });
  const data = await res.json();
  return data;

  // const data = { error: true, message: "Please login" };
  // return data;
}

export async function userLogOut() {
  const res = await fetch("http://localhost:3000/auth/logout", {
    credentials: "include",
  });
  const data = await res.json();
  if (data.error) throw new Error(data.message);

  const Udata = authenticatedUserData();
  return Udata;
}

export async function authenticateUser({ username, password }) {
  const loginDetails = new URLSearchParams();
  loginDetails.append("vtu_id", username);
  loginDetails.append("password", password);
  const res = await fetch("http://localhost:3000/auth/login", {
    method: "POST",
    body: loginDetails,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Access-Control-Allow-Credentials": "true",
    },
    credentials: "include",
  });

  const data = await res.json();

  if (data.error) throw new Error("Provided username or password is wrong");

  return data;

  //if (username === "suraj" && password === "gay") return { error: false };
  //else throw new Error("Provided username or password is wrong");
}
