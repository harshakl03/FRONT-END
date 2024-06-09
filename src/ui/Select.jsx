import styled from "styled-components";

export const Select = styled.select`
  color: black;
  font-size: 1em;
  border: none;
  border-radius: 10px;
  margin: 20px;
  width: 250px;
  padding: 1em;
  border: 1px solid black;
  font-family: "Poppins";
  background-color: #f4f4f4; /* Light background color */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #e0e0e0; /* Lighter background color on hover */
  }
  
  &:focus {
    background-color: #ffffff; /* White background color on focus */
  }
`;

export const Option = styled.option`
  font-size: 15px;
  padding: 0.5em; /* Padding for inside content */
  cursor: pointer;
`;

