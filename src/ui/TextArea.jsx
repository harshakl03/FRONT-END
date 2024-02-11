import styled from "styled-components";

export const TextArea = styled.textarea`
  border-radius: 10px;
  resize: vertical;
  margin: 5px;
  padding: 10px;
  border: 1px solid black;
  font-size: 16px;
  color: #333;
  background-color: #f4f4f4;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s ease;

  &:hover {
    border-color: #000000;
  }

  &:focus {
    outline: none;
    border-color: #525252;
    box-shadow: 0 0 5px rgba(91, 91, 91, 0.5);
  }

  &::placeholder {
    color: #414141;
    opacity: 0.5;
  }
`;
