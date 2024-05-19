export async function getCourseData() {
  const res = await fetch(`http://localhost:3000/courses`, {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Access-Control-Allow-Credentials": "true",
    },
    credentials: "include",
  });

  const data = await res.json();

  return data;
}

export async function apiDateSet(data) {
  const newObject = new URLSearchParams();
  Object.keys(data).map((field) => newObject.append(field, data[field]));

  const res = await fetch("http://localhost:3000/user/setacyear", {
    method: "POST",
    body: newObject,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Access-Control-Allow-Credentials": "true",
    },
    credentials: "include",
  });

  const Odata = await res.json();
  return Odata;
}
