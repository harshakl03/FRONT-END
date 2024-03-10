import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const StyledList = styled.ul`
  position: fixed;
  top: ${(props) => props.position.y}px;
  right: ${(props) => props.position.x}px;
  //edit from here
  background-color: thistle;
  width: 200px;
`;

const List = styled.li`
  //edit from here
  margin: 5px;
  padding: 5px;
  border: solid;
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
