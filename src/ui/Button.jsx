import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const coolShadow = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.5);
  }
  50% {
    transform: scale(1.0125);
    box-shadow: 6px 6px 8px rgba(0, 0, 0, 0.7);
  }
  100% {
    transform: scale(1);
    box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.5);
  }
`;

const Button = styled.button`
  color: white;
  width: 150px;
  margin-top: 10px;
  height: 5rem;
  font-size: 1em;
  font-family: "Poppins", sans-serif;
  padding: 0.25em 1.5em;
  border-radius: 30px;
  background-color: #282828;
  border: none;
  cursor: pointer;
  box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
  overflow: hidden;

  &:hover {
    animation: ${coolShadow} 0.5s ease;
  }

  &:focus {
    outline: none;
    background-color: #515151;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }
`;

const ButtonLink = styled(Link)`
  color: white;
  font-size: 1em;
  font-family: "Poppins", sans-serif;
  padding: 0.5em 1.5em;
  border-radius: 30px;
  background-color: #282828;
  border: none;
  margin: 8px;
  cursor: pointer;
  box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
  text-decoration: none;
  overflow: hidden;

  &:hover {
    animation: ${coolShadow} 0.5s forwards;
  }

  &:focus {
    outline: none;
    background-color: #282828;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }
`;

export default function CustomButton({ children, onClick, to }) {
  if (to) return <ButtonLink to={to}>{children}</ButtonLink>;

  return <Button onClick={onClick}>{children}</Button>;
}
