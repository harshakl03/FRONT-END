import styled from "styled-components";

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  border-radius: 25px;
  margin: 20px;
`;

export default function Form({ children }) {
  return <StyledForm>{children}</StyledForm>;
}
