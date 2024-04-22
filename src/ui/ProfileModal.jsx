import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const StyledList = styled.ul`
  position: fixed;
  display: flex;
  align-items: center;
  flex-direction: column;
  top: ${(props) => props.position.y}px;
  right: ${(props) => props.position.x}px;
  background-color: #b3b3b380;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 175px;
  height: auto;
  border-radius: 10px;
  border: 0.5px solid #3a77f7;
  text-align: center;
`;

const List = styled.li`
  cursor: pointer;
  margin: 3px;
  width: 85%;
  padding: 5px;
  border: 0.75px solid #3a77f7;
  border-radius: 10px;
  color: #000000;
  margin-bottom: 5px;
  margin-top: 5px;
  background-color: #fafafa;

  &:hover {
    color: white;
    background-color: #282828;
    border-color: yellow;
  }
`;

//don't touch
export default function ProfileModal({ isOpen, position, setIsOpen }) {
  const ref = useRef();
  useEffect(
    function () {
      window.onscroll = function () {
        setIsOpen(false);
      };

      function handleOutsideClick(e) {
        if (
          ref.current &&
          !ref.current.contains(e.target) &&
          e.target.name !== "profile"
        ) {
          setIsOpen(false);
        }
      }

      document.addEventListener("click", handleOutsideClick, true);

      return () =>
        document.removeEventListener("click", handleOutsideClick, true);
    },
    [setIsOpen]
  );
  if (isOpen)
    return createPortal(
      <StyledList position={position} ref={ref}>
        <List>Your profile</List>
        <List>Settings</List>
        <List>Theme</List>
      </StyledList>,
      document.body
    );
}
