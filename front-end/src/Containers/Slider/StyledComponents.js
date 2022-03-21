// Styled Component Library
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform: translateX(-${({ slideIndex }) => slideIndex * 100}vw);
  transition: transform 1000ms ease-in-out;
`;

// Arrow
export const Arrow = styled.button`
  appearance: none;
  border: none;
  outline: none;
  width: 40px;
  height: 40px;
  background-color: hsl(0, 0%, 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: ${({ direction }) => direction === "left" && "10px"};
  right: ${({ direction }) => direction === "right" && "10px"};
  z-index: 2;
  opacity: 0.7;
  transition: opacity 200ms ease-in;
  box-shadow: 0 0 1px 0 rgb(84, 69, 69), 0 0 4px 0 rgb(28, 23, 23);

  &:hover {
    opacity: 1;
  }

  &:disabled {
    opacity: 1;
    cursor: not-allowed;
  }
`;
