import { Outlet } from "react-router-dom";
import ProfileIcon from "./ProfileIcon";
import { Footer } from "./Stylers";

export default function AppLayout() {
  return (
    <>
      <ProfileIcon />
      <Outlet />
      <Footer>@Copyright2024</Footer>
    </>
  );
}
