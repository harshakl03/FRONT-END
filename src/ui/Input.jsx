import styled from "styled-components";

const StyledInput = styled.input`
  color: black;
  font-size: 1em;
  border: 2px solid yellow;
  border-radius: 15px;
  margin: 0 1em;
  padding: 1em;
  font-family: "Poppins";

  &:focus {
    width: 2000px;
  }
`;

export default function Input() {
  return <StyledInput name="abc" />;
}
