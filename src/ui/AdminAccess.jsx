import { useEffect } from "react";
import useLoginData from "../features/Login-and-Register/useLoginData";
import { Outlet, useNavigate } from "react-router-dom";

export default function AdminAccess() {
  const { data, isLoading } = useLoginData();
  const navigate = useNavigate();

  useEffect(() => {
    if (data.payload.level < 4 && !isLoading) navigate("/");
  }, [data.payload.level, isLoading, navigate]);

  if (isLoading) return <h1>Loading</h1>;

  return <Outlet />;
}
