import styled from "styled-components";
const ErrorMessage = styled.p`
  color: #ff0000;
`;

export default function ErrorElement({ message }) {
  return (
    <ErrorMessage>
      {message ? message : "The above field is required"}
    </ErrorMessage>
  );
}
