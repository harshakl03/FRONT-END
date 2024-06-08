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

//TLEA API Functions

export async function getISTHDataApi(tag) {
  const vtuId = localStorage.getItem("vtu-id");
  const res = await fetch(`http://localhost:3000/tlea/${tag}/${vtuId}`, {
    credentials: "include",
  });
  const data = await res.json();
  return data;
}

export async function insertMulISTHApi(data, tag) {
  const vtuId = localStorage.getItem("vtu-id");
  const res = await fetch(`http://localhost:3000/tlea/${tag}/m/${vtuId}`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Credentials": "true",
    },
    credentials: "include",
  });
  const Odata = await res.json();
  if (Odata.error) throw new Error(Odata.message);
  return Odata;
}
