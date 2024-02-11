import styled from "styled-components";
import ErrorElement from "./ErrorElement";
import { useState } from "react";
import { useSelector } from "react-redux";

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

export default function Input({ id, name, value = "", onChange, onKeyPress }) {
  const [isError, setIserror] = useState(false);
  const data = useSelector((state) => state.partA);

  function handleFocusOut() {
    if (!data[id].required) return;
    !value || value === 0 ? setIserror(true) : setIserror(false);
  }

  return (
    <>
      <StyledInput
        id={id}
        name={name}
        value={value === 0 ? "" : value}
        onChange={onChange}
        onKeyPress={onKeyPress}
        onBlur={handleFocusOut}
      />
      {isError && <ErrorElement />}
    </>
  );
}
