import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const coolShadow = keyframes`
  from{
    transform: scale(1);
    box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.5);
  }
  to{
    transform: scale(1.05);
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
    //animation: ${coolShadow} 1s ease;
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
    background-color: #515151;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }
`;

const ButtonLink = styled(Link)`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 5rem;
  margin-top: 10px;
  font-size: 1em;
  font-family: "Poppins", sans-serif;
  padding: 0.25em 1.5em;
  border-radius: 30px;
  background-color: #282828;
  border: none;
  cursor: pointer;
  box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
  text-decoration: none;
  overflow: hidden;

  &:hover {
    //animation: ${coolShadow} 0.5s;
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
    background-color: #282828;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default function CustomButton({
  children,
  onClick,
  to,
  icon,
  disabled,
}) {
  if (to)
    return (
      <ButtonLink to={to}>
        {icon} {children}
      </ButtonLink>
    );

  return (
    <Button onClick={onClick} disabled={disabled}>
      {icon} {children}
    </Button>
  );
}
