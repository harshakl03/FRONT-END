import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const StyledList = styled.ul`
  position: fixed;
  top: ${(props) => props.position.y}px;
  right: ${(props) => props.position.x}px;
  background-color: #b3b3b380;
  width: 175px;
  height: auto;
  border-radius: 10px;
  text-align: center;
`;

const List = styled.li`
  margin: 5px;
  padding: 5px;
  border: 0.75px solid #3A77F7;
  border-radius: 20px;
  color: #000000;
  margin-bottom: 15px;
  margin-top: 15px;
  background-color: #fafafa;
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
