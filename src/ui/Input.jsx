import styled from "styled-components";

const StyledInput = styled.input`
  color: black;
  font-size: 1em;
  border: 2px solid black;
  border-radius: 10px;
  margin: 1em;
  padding: 1em;
  font-family: "Poppins";
  box-shadow: 1px 1px 5px black;

  &:focus{
        background-color: black;
        color: white;
    
    }
`;

const StyledPart = styled.input`
  
`
export default function Input() {
  return <StyledInput name="abc" />;
}
