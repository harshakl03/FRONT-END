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

  &:focus {
    background-color: black;
    color: white;
  }
  &:focus {
    background-color: #838383;
    color: #000000;
    transition: color 0.5s, background-color 0.5s;
  }
  &:hover {
    background-color: #838383;
    color: #000000;
    transition: color 0.5s, background-color 0.5s;
  }
`;

export default function Input() {
  return <StyledInput />;
}
