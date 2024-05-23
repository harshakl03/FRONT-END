import { Link, useNavigate } from "react-router-dom";
import Back from "./Back";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;
const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 25px;
  max-width: 400px;
  width: 100%;
`;

const Title = styled.h2`
  color: #252525;
  font-size: 24px;
  margin-bottom: 20px;
`;

const StyledLink = styled(Link)`
  color: #0066ff;
  text-decoration: none;
  font-size: 18px;
  margin-bottom: 10px;
  text-decoration: underline;
`;

export default function SettingsLayout() {
  const navigate = useNavigate();
  return (<><Back onClick={() => navigate("/")} />
    <Container>
      <br />
      <br />
      <Card>
        <Title>Settings</Title>
        <StyledLink to="change-password">Change Password</StyledLink><br /><br />
        <StyledLink to="/forgot-password">Forgot Password</StyledLink>
      </Card>
    </Container>
    </>
  );
}
