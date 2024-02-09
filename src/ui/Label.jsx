import styled from "styled-components";

const StyledLabel = styled.label`
  font-family: "Poppins", sans-serif;
  font-size: 1em;
  color: #555; /* Text color */
  margin-bottom: 0.5em; /* Add some spacing below the label */
`;

export default function Label({ children }) {
  return <StyledLabel>{children}</StyledLabel>;
}
