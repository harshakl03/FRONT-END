import styled, { css } from "styled-components";

export const Input = styled.input`
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

  ${(props) =>
    props.type === "number" &&
    css`
      &::-webkit-inner-spin-button,
      &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
        margin: 0;
      }
    `}/* input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0;
  } */
`;

export const FileInput = styled.input`
  margin-top: 10px;

  &::file-selector-button {
    display: inline-block;
    padding: 10px 20px;
    font-size: 16px;
    color: #333;
    border: 1px solid #333;
    border-radius: 5px;
    cursor: pointer;
  }
`;
