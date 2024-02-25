import styled from "styled-components";

const ProfileImage = styled.img`
  position: absolute;
  top: 4px;
  right: 5px;
  border-radius: 100%;
  border: solid;
  height: 60px;
  width: 60px;
  &:hover {
    border-color: red;
    transition: all 0.05s;
  }
`;

export default function Profile() {
  return (
    <ProfileImage
      src="\profile-11446-15299734327876804163.jpg"
      alt="profile"
      onClick={() => alert("Profile clicked")}
    />
  );
}
