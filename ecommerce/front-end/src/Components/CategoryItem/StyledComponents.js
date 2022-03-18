import styled from "styled-components";

export const Container = styled.div`
  flex: 1;
  height: 70vh;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// Info Section
export const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  row-gap: 20px;
  background-color: hsl(0, 100%, 0%, 0.6);
`;

export const Title = styled.h1`
  color: #fff;
`;

export const Button = styled.button`
  appearance: none;
  border: none;
  outline: 2px solid #000;
  background-color: #fff;
  color: #333;
  font-weight: 600;
  text-transform: uppercase;
  padding: 0.5em 1.5em;
  cursor: pointer;
  position: relative;
  isolation: isolate;
  transition: color 500ms ease-in-out;

  &:hover {
    color: #fff;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to right, transparent 0%, transparent 50%, #000 51%, #000 100%);
    background-size: 210% 100%;
    background-position: 0 0;
    transition: background-position 300ms ease-in-out;
  }

  &:hover::after {
    background-position: 100% 0;
  }
`;
