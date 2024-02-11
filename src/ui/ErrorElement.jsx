import styled from "styled-components";
const ErrorMessage = styled.p`
  color: #ff0000;
`;

export default function ErrorElement() {
  return <ErrorMessage>The above field is required</ErrorMessage>;
}
