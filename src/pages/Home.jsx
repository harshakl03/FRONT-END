import { Input } from "../ui/Input";
import Button, { ButtonRow } from "../ui/Button";
import Label from "../ui/Label";
import styled from "styled-components";
import useLoginData from "../features/Login-and-Register/useLoginData";
import Profile from "../ui/Profile";
import { Footer } from "../ui/Stylers";

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
  const { data, isLoading } = useLoginData();
  //console.log(data);
  if (isLoading) return <h1>Loading</h1>;

  return (
    <>
      <StyledHome>
        <h1>Home</h1>
        <Image src="/Bangalore_Institute_of_Technology_logo.png" alt="LOGO" />
        {data.error === true || typeof data.error === "undefined" ? (
          <ButtonRow>
            <Button to="/login">Log In</Button>
            <Button to="/register">Register</Button>
          </ButtonRow>
        ) : (
          <>
            <Profile />
            <h1>Welcome</h1>
            <ButtonRow>
              <Button to="/employee/part-a">Apply Form</Button>
            </ButtonRow>
          </>
        )}
      </StyledHome>
      <Footer>@Copyright2024</Footer>
    </>
  );
}
