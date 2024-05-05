export async function RegisterEmployeeApi(data) {
  const newObject = new URLSearchParams();
  Object.keys(data).map((field) => newObject.append(field, data[field]));

  const res = await fetch("http://localhost:3000/employees", {
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

export async function RegisterUserApi(data) {
  const newObject = new URLSearchParams();
  Object.keys(data).map((field) => newObject.append(field, data[field]));

  const res = await fetch("http://localhost:3000/auth/register", {
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
