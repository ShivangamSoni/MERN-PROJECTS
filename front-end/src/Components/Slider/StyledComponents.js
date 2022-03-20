// Responsive Mixin
import { responsive } from "../../Common/StyledComponents";

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

// Slide
export const Slide = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 60% 40%;
  background-color: #${({ bg }) => bg};

  ${responsive(
    {
      gridTemplateColumns: "auto",
      gridTemplateRows: "50% 50%",
      rowGap: "30px",
    },
    "900px",
  )}
`;

export const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  row-gap: 50px;

  ${responsive(
    {
      padding: "10px",
      alignItems: "stretch",
      rowGap: "30px",
    },
    "900px",
  )}
`;

export const Title = styled.h1`
  font-size: 70px;
  text-transform: uppercase;

  ${responsive(
    {
      fontSize: "50px",
    },
    "900px",
  )}
`;

export const Desc = styled.p`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
  text-transform: uppercase;

  ${responsive(
    {
      fontSize: "16px",
    },
    "900px",
  )}
`;

export const Button = styled.button`
  appearance: none;
  padding: 0.8em 2em;
  background-color: transparent;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  color: hsl(30, 90%, 55%);
  font-size: 16px;
  font-weight: 600;
  outline: 2px solid hsl(30, 90%, 55%);
  position: relative;
  transition: all 500ms ease-in-out;
  isolation: isolate;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to right, transparent 0%, transparent 50%, hsl(0, 100%, 0%) 51%, hsl(0, 100%, 0%) 100%);
    background-size: 210% 100%;
    background-position: 0 0;
    z-index: -1;
    transition: all 300ms ease-in-out;
  }

  &:hover {
    color: #fff;
  }

  &:hover::after {
    background-position: 100% 0;
  }
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
