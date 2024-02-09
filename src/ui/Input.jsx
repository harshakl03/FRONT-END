import styled from "styled-components";

const StyledInput = styled.input`
  color: black;
  font-size: 1em;
  border: 2px solid black;
  border-radius: 10px;
  margin: 1em;
  padding: 1em;
  font-family: "Poppins";
  box-shadow: 1px 1px 5px #8a8a8a;

  &:focus {
    background-color: black;
    color: white;
  }
  &:focus {
    background-color: #fff;
    color: #000000;
    transition: color 0.5s, background-color 0.5s;
  }
  &:hover {
    background-color: #fff;
    color: #000000;
    transition: color 0.5s, background-color 0.5s;
  }

  &:hover {
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
