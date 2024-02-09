import styled from "styled-components";

const StyledArea = styled.textarea`
  border-radius: 10px;
  margin: 5px;
  padding: 10px;
  border: 2px solid black;
  font-size: 16px; /* Change the font size */
  color: #333; /* Text color */
  background-color: #ffffff; /* Background color */
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
  transition: border-color 0.3s ease; /* Add transition effect for border color */

  /* Hover effect */
  &:hover {
    border-color: #000000;
  }

  /* Focus effect */
  &:focus {
    outline: none;
    border-color: #525252; /* Change border color on focus */
    box-shadow: 0 0 5px rgba(91, 91, 91, 0.5); /* Change box shadow on focus */
  }

  /* Placeholder styling */
  &::placeholder {
    color: #414141;
    opacity: 0.5; /* Placeholder text color */
  }
`;

export default function TextArea({ name }) {
  return (
    <StyledArea
      name={name}
      placeholder="Enter your address here :)"
      rows={3}
      cols={20}
    />
  );
}
