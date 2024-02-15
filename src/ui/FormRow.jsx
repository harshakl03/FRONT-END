import styled from "styled-components";
import ErrorElement from "./ErrorElement";

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-bottom: 2rem;
`;

export default function FormRow({ label, error, children, errorm }) {
  return (
    <StyledFormRow>
      {label && <label htmlFor="id">{label}</label>}
      {children}
      {(error || errorm) && <ErrorElement message={errorm} />}
    </StyledFormRow>
  );
}
