import styled from "styled-components";

const StyledInput = styled.input`
  color: black;
  font-size: 1em;
  border: 2px solid black;
  border-radius: 15px;
  margin: 0 1em;
  padding: 1em;
  font-family: "Poppins";
`;

export default function Input() {
  return <StyledInput name="abc" />;
}
