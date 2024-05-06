import { userLogOut } from "./apiLoginRegister";

export async function getEmployeeData() {
  const vtuId = localStorage.getItem("vtu-id");
  const res = await fetch(`http://localhost:3000/employees/${vtuId}`, {
    credentials: "include",
  });
  const data = await res.json();

  if (data.error) {
    userLogOut();
    return;
  }

  return data.payload.details;
}

export async function updateEmployeeDetails(newData) {
  const vtuId = localStorage.getItem("vtu-id");
  const data = await getEmployeeData();
  const newObject = new URLSearchParams();
  Object.keys(data).map((field) => {
    if (data[field] !== newData[field]) {
      newObject.append(field, newData[field]);
    }
    return 0;
  });

  const res = await fetch(`http://localhost:3000/employees/${vtuId}`, {
    method: "PATCH",
    body: newObject,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      "Access-Control-Allow-Credentials": "true",
    },
    credentials: "include",
  });

  const Odata = await res.json();
  if (Odata.error) throw new Error(Odata.message);

  const UpdatedData = await getEmployeeData();

  return UpdatedData;
}
