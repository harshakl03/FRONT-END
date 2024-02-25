import styled from "styled-components";

const ProfileImage = styled.img`
  position: absolute;
  top: 4px;
  right: 5px;
  border-radius: 50%;
  margin-right: 5px;
  margin-top: 5px;
  border: 2px solid #272727;
  box-shadow: 0 3px 15px rgba(0,0,0,0.1);
  height: 60px;
  width: 60px;
  transition: all 0.5s;
  &:hover {
    border-color: #4369e6;
    transform: scale(1.1);
    cursor: pointer;
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
