import styled from "styled-components";

const StyledInput = styled.input`
  color: black;
  font-size: 1em;
  border: none;
  border-radius: 10px;
  margin: 1em;
  padding: 1em;
  border: 1px solid black;
  font-family: "Poppins";
  background-color: #f4f4f4; /* Light background color */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Softer shadow */

  &:focus {
    outline: none;
    background-color: #e0e0e0; /* Slightly darker background on focus */
    color: #333; /* Darker text color */
  }

  &:hover {
    background-color: #eaeaea; /* Slightly darker background on hover */
  }
`;

export default function Input({ id, name, value, onChange }) {
  return (
    <StyledInput
      id={id}
      name={name}
      value={value === 0 ? "" : value}
      onChange={onChange}
    />
  );
}
