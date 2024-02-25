import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import { Footer } from "./Stylers";

export default function AppLayout() {
  return (
    <>
      <Profile />
      <Outlet />
      <Footer>@Copyright2024</Footer>
    </>
  );
}
