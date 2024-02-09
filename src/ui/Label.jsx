import styled from "styled-components";

const StyledLabel = styled.label`
  font-family: "Nunito", "Poppins";
`;
export default function Label({ children }) {
  return <StyledLabel>{children}</StyledLabel>;
}
