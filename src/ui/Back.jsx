import styled from "styled-components";
import { FaArrowLeft } from 'react-icons/fa';

const StyledBack = styled.div`
  background-color: #ffffff;
  color: #282828;
  border: 1.25px solid #dcdcdc;
  border-radius: 100px;
  padding: 12px;
  font-size: 16px;
  cursor: pointer;
  display: inline-flex;
  margin-top: 25px;
  margin-left: 25px;
  align-items: center;
  transition: background-color 0.5s, color 0.5s, border-color 0.5s;

  &:hover {
    background-color: #282828;
    color: #ffffff;
  
  }

  &:focus {
    outline: none;
  }
`;
const BackIcon = styled(FaArrowLeft)`
  margin-right: 8px;
  font-size: 15px;
`;

export default function Back({ onClick }) {
  return <StyledBack onClick={onClick}><BackIcon /></StyledBack>;
}
