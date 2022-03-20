// Responsive Mixin
import { responsive } from "../../Common/StyledComponents";

// Styled Component Library
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-position: center;
  background-size: cover;
`;

export const Wrapper = styled.div`
  width: 400px;
  max-width: 95%;
  padding: 20px;
  background-color: #fff;
`;

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 300;
  text-transform: uppercase;
`;

export const Form = styled.form`
  display: flex;
  flex-flow: column nowrap;
  row-gap: 10px;
  margin-top: 20px;
`;

export const Input = styled.input`
  appearance: none;
  border: none;
  outline: 2px solid #ccc;
  padding: 10px;
  transition: all 200ms ease-in-out;

  &:focus {
    outline-color: #333;
    transition: all 50ms ease-in-out;
  }
`;

export const Button = styled.button`
  appearance: none;
  border: none;
  outline: 2px solid #000;
  background-color: #fff;
  font-size: 14px;
  color: #333;
  font-weight: 600;
  text-transform: uppercase;
  padding: 0.7em 3em;
  cursor: pointer;
  position: relative;
  isolation: isolate;
  transition: color 500ms ease-in-out;
  width: 50%;

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

  ${responsive(
    {
      width: "100%",
    },
    "600px",
  )}
`;

export const LinkWrapper = styled.span`
  font-size: 12px;
  text-transform: uppercase;
`;

export const Link = styled.a`
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background-image: linear-gradient(to right, transparent 0%, transparent 50%, #000 51%, #000 100%);
    background-size: 250% 100%;
    background-position: top left;
    transition: all 300ms linear;
  }

  &:hover::after {
    background-position: top right;
  }
`;
