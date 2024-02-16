import { Input } from "../ui/Input";
import Button, { ButtonRow } from "../ui/Button";
import Label from "../ui/Label";
import styled from "styled-components";

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-image: url("https://singheducation.co.in/images/CollegeImages/618942DSC_0837-582x359.jpg");
  background-size: 100% 100%; */
`;

const Image = styled.img`
  background-color: white;
  padding: 10px;
  border: solid black;
  aspect-ratio: 1/1;
`;

export default function Home() {
  return (
    <StyledHome>
      <h1>Home</h1>
      <Image src="/Bangalore_Institute_of_Technology_logo.png" alt="LOGO" />
      <ButtonRow>
        <Button to="/login">Log In</Button>
        <Button to="/register">Register</Button>
      </ButtonRow>
    </StyledHome>
  );
}
