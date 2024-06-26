import styled from "styled-components";

export const CustomButton = styled.button`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
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
  flex-direction: column;
  position: relative;

  &:hover {
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
    background-color: #282828;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }
`;

export const CustomDelete = styled.button`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 5rem;
  font-size: 1em;
  font-family: "Poppins", sans-serif;
  padding: 0.25em;
  border-radius: 30px;
  background-color: #282828;
  border: none;
  cursor: pointer;
  box-shadow: 4px 4px 5px rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;
  text-decoration: none;
  overflow: hidden;
  flex-direction: column;
  &:hover {
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
    background-color: #282828;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }
`;
export const CustomAdd = styled.button`
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 6.5rem;
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
  flex-wrap: wrap;
  margin: 50px 75px;

  &:hover {
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
    background-color: #282828;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 80%;

  margin: 20px auto;
  padding: 35px;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;

  & > * {
    margin-bottom: 15px;
    position: relative;
  }

  & > :last-child {
    margin-bottom: 0;
  }

  input + p {
    margin-top: 10px;
  }

  & > *:not(:last-child)::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    border-bottom: 1px solid #939393;
  }
`;
export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  padding: 15px;
  gap: 5px;
  transition: flex-direction 0.3s ease-in-out;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
  }
`;

/*export const FlexrowCourse = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  max-width: 100%;
  box-sizing: border-box;
  transition: flex-direction 0.3s ease-in-out;
  position: relative;

  @media (max-width: 1980px) {
    flex-direction: row;
    width: 100%;
  }
`*/

// export const SelectDeleteContainer = styled.div`
//   display: flex;
//   align-items: center;
//   gap: 10px;
//   flex: 1;
//   position: relative;

//   @media (max-width: 768px) {
//     width: 100%;
//   }
// `;
