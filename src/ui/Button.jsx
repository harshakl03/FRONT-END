import styled from "styled-components";

const BlackButton = styled.button`
    color: white;
    font-size: 1em;
    font-family: 'Poppins', sans-serif;;
    margin: 2px;
    padding: 0.25em 1em;
    border-radius: 50px;
    color: white;
    background-color: black;
    cursor: pointer;
    border: 2px solid black
`
export default function Button({children}){
    return (
        <BlackButton>{children}</BlackButton>
    )
}