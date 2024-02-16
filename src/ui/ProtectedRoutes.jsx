import { useNavigate } from "react-router-dom";
import useLoginData from "../features/Login-and-Register/useLoginData";
import { useEffect } from "react";

export default function ProtectedRoutes({ children }) {
  const { data, isLoading } = useLoginData();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (data?.statuscode !== 200 && !isLoading) navigate("/login");
    },
    [data?.statuscode, navigate, isLoading]
  );

  if (isLoading) return null;
  //console.log(data);

  return children;
}
