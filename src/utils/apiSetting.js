export async function changePasswordApi(data) {
  const { oldPassword, newPassword, confirmOld, confirmNew } = data;

  if (oldPassword !== confirmOld || newPassword !== confirmNew)
    throw new Error("Passwords are not matching!!!");
  if (oldPassword === newPassword)
    throw new Error("Old and New passwords are same!!!");

  const newObject = new URLSearchParams();
  newObject.append("oldPassword", oldPassword);
  newObject.append("newPassword", newPassword);

  const res = await fetch("http://localhost:3000/user/changepassword", {
    method: "POST",
    body: newObject,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Access-Control-Allow-Credentials": "true",
    },
    credentials: "include",
  });

  const Odata = await res.json();
  if (Odata.error) throw new Error(Odata.message);

  return Odata;
}

export async function forgotPasswordApi(data) {
  console.log(data);
  const newObject = new URLSearchParams();
  newObject.append("vtu_id", data.vtu_id);
  newObject.append("pan_number", data.pan_number);
  newObject.append("password", data.password);

  const res = await fetch("http://localhost:3000/user/forgetpassword", {
    method: "POST",
    body: newObject,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Access-Control-Allow-Credentials": "true",
    },
  });

  const Odata = await res.json();
  console.log(Odata);
  if (Odata.error) throw new Error(Odata.message);

  return Odata;
}
