import styled, { keyframes } from "styled-components";

const coolPulseAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.0125);
  }
  100% {
    transform: scale(0.975);
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 20px auto;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;

  /* Add space between each child */
  & > * {
    margin-bottom: 15px; /* Adjust the value as needed */
    position: relative;
  }

  /* Remove margin from the last child to avoid extra space */
  & > :last-child {
    margin-bottom: 0;
  }

  /* Apply spacing between text field and text of the element below */
  input + p {
    margin-top: 10px; /* Adjust the value as needed */
  }
  /* Add a line between each field */
  & > *:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    border-bottom: 1px solid #939393; /* Adjust line style as needed */
  }
`;

export default function Form({ onSubmit, children }) {
  return <StyledForm onSubmit={onSubmit}>{children}</StyledForm>;
}
