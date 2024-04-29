import { Link, useNavigate } from "react-router-dom";
import Back from "./Back";

export default function SettingsLayout() {
  const navigate = useNavigate();
  return (
    <div>
      <Back onClick={() => navigate("/")} />
      <br />
      <br />
      <Link to="change-password">Change Password</Link>
      <br />
      <br />
      <Link to="/forgot-password">Forgot Password</Link>
    </div>
  );
}
