import styled from "styled-components";
const ErrorMessage = styled.p`
  color: #d80e0e;
`;

export default function ErrorElement({ message }) {
  return (
    <ErrorMessage>
      {message ? message : "The above field is required"}
    </ErrorMessage>
  );
}
