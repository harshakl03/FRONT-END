import styled from "styled-components";

export const Select = styled.select`
    color: black;
  font-size: 1em;
  border: none;
  border-radius: 10px;
  margin: 1em;
  padding: 1em;
  border: 1px solid black;
  font-family: "Poppins";
  background-color: #f4f4f4; /* Light background color */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Option = styled.option`
    font-size: 18px;
    padding: 1em; /* Padding for inside content */
    cursor: pointer; /* Change cursor to pointer on hover */
    select:focus > &:hover {
        background-color: #ffffff; /* Background color on hover */
    }
`;
