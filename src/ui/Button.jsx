import styled from "styled-components";

const BlackButton = styled.button`
    color: white;
    font-size: 1em;
    font-family: 'Poppins', sans-serif;
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
    
    }
`;

export default function Button({children}){
    return (
        <BlackButton>{children}</BlackButton>
    )
}