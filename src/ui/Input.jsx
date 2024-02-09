import styled from "styled-components";

const StyledInput = styled.input`
  color: black;
  font-size: 1em;
  border: 2px solid black;
  border-radius: 10px;
  margin: 1em;
  padding: 1em;
  font-family: "Poppins";
  box-shadow: 1px 1px 5px black;

<<<<<<< HEAD
  &:focus {
    background-color: black;
    color: white;
  }
=======
  &:focus{
        background-color: #838383;
        color: #000000;
        transition: color 0.5s, background-color 0.5s;
    
    }
<<<<<<< HEAD
  &:hover{  
    background-color: #838383;
        color: #000000;
        transition: color 0.5s, background-color 0.5s;
  }
=======
  &:hover{  }
>>>>>>> 6e6d964e51f8ef4c53ae3383515337841170ad8e
>>>>>>> 7681d364ad9728fb3d9706debd68737d959ce335
`;

export default function Input() {
  return <StyledInput name="abc" />;
}
