import Button, { ButtonRow } from "../ui/Button";
import styled from "styled-components";
import useLoginData from "../features/Login-and-Register/useLoginData";
import ProfileIcon from "../ui/ProfileIcon";
import { Footer } from "../ui/Stylers";
import { useEffect } from "react";
import { logOut } from "../utils/apiLoginRegister";

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

  // useEffect(() => {
  //   if (data?.payload?.vtu_id !== localStorage.getItem("vtu-id")) logOut();
  // }, [data?.payload?.vtu_id]);

  if (isLoading) return <h1>Loading</h1>;
  if (data?.payload) localStorage.setItem("vtu-id", data.payload.vtu_id);

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
            <ProfileIcon />
            <h1>Welcome</h1>
            <ButtonRow>
              <Button to="/employee/part-b/cat1">Apply Form</Button>
            </ButtonRow>
          </>
        )}
      </StyledHome>
      <Footer>@Copyright2024</Footer>
    </>
  );
}
