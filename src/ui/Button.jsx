import { Link } from "react-router-dom";
import styled from "styled-components";

const BlackButton = styled.button`
  color: white;
  font-size: 1em;
  font-family: "Poppins", sans-serif;
  margin: 5px;
  padding: 0.25em 1em;
  border-radius: 50px;
  color: #fff;
  background-color: #282828;
  cursor: pointer;
  display: inline-block;
  border: 2px solid black;
  box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.5);
  letter-spacing: 1.5px;

  &:focus {
    background-color: #515151;
    color: white;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }
`;

const BlackButtonLink = styled(Link)`
  color: white;
  font-size: 1em;
  font-family: "Poppins", sans-serif;
  margin: 5px;
  padding: 0.25em 1em;
  border-radius: 50px;
  color: black;
  background-color: white;
  cursor: pointer;
  display: inline-block;
  border: 2px solid black;
  box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.5);
  letter-spacing: 1.5px;

  &:focus {
    background-color: black;
    color: white;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    opacity: 0.75;
  }
  &:hover {
    background-color: black;
    color: white;
    transform: (0.88);
    transition: color 0.3s, background-color 0.3s;
  }
`;

export default function Button({ children, onClick, to }) {
  if (to) return <BlackButtonLink to={to}>{children}</BlackButtonLink>;

  return <BlackButton onClick={onClick}>{children}</BlackButton>;
}
