import { Link } from "react-router-dom";
import styled from "styled-components";

const BlackButton = styled.button`
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

  &:focus {
    background-color: black;
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

    &:focus{
        background-color: black;
        color: white;
        box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    }
`;

export default function Button({ children, onClick, to }) {
  if (to) return <BlackButtonLink to={to}>{children}</BlackButtonLink>;

  return <BlackButton onClick={onClick}>{children}</BlackButton>;
}
