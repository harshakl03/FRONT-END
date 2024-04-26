export function authenticatedUserData() {
  const res = fetch("http://localhost:3000/auth/secret");
  const data = res.json();
  console.log(data);
  return data;

  //const data = { error: true, message: "Please login" };
  //return data;
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
    },
  });

  const data = await res.json();

  console.log(data);

  if (data.error) throw new Error("Provided username or password is wrong");

  return data;

  //if (username === "suraj" && password === "gay") return { error: false };
  //else throw new Error("Provided username or password is wrong");
}
