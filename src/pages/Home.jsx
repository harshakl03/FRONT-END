import Button, { ButtonRow } from "../ui/Button";
import styled from "styled-components";
import useLoginData from "../features/Login-and-Register/useLoginData";
import ProfileIcon from "../ui/ProfileIcon";
import LoadingScreen from "../ui/LoadingScreen";
import { Footer } from "../ui/Stylers";
// import { useEffect } from "react";
// import { logOut } from "../utils/apiLoginRegister";

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

  if (isLoading) return <LoadingScreen />;
  if (data?.payload) localStorage.setItem("vtu-id", data.payload.vtu_id);

  if (data.error === true || typeof data.error === "undefined")
    return (
      <>
        <StyledHome>
          <h1>Home</h1>
          <Image src="/Bangalore_Institute_of_Technology_logo.png" alt="LOGO" />
          <ButtonRow>
            <Button to="/login">Log In</Button>
            <Button to="/register">Register</Button>
          </ButtonRow>
        </StyledHome>
        <Footer>@Copyright2024</Footer>
      </>
    );

  return (
    <>
      <StyledHome>
        <h1>Home</h1>
        <Image src="/Bangalore_Institute_of_Technology_logo.png" alt="LOGO" />
        <ProfileIcon />
        <h1>Welcome</h1>
        {data.payload.level < 4 ? (
          <ButtonRow>
            <Button to="/part-b/cat1">Apply Form</Button>
          </ButtonRow>
        ) : (
          data.payload.level >= 4 && (
            <>
              <ButtonRow>
                <Button to="/admin/register-employee">Register Employee</Button>
                <Button to="/admin/register-user">Register User</Button>
              </ButtonRow>
              <ButtonRow>
                <Button to="/admin/assign-role">Assign Role</Button>
              </ButtonRow>
            </>
          )
        )}
      </StyledHome>
      <Footer>@Copyright2024</Footer>
    </>
  );
}
