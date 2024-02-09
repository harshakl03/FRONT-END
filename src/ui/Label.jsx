import styled from "styled-components"

const StyledLabel = styled.label`
    font-family: 'Nunito', 'Poppins';
`
export default function Label(){
    return(
        <StyledLabel>Enter your name: </StyledLabel>
    )
}