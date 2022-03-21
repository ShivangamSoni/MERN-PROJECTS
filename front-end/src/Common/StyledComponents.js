import { css } from "styled-components";

export const responsive = (props, width) => {
  return css`
    @media only screen and (max-width: ${width}) {
      ${props}
    }
  `;
};

export const buttonStyling = css`
  appearance: none;
  border: none;
  outline: 2px solid #333;
  background-color: #fff;
  color: #333;
  font-weight: 600;
  text-transform: uppercase;
  padding: 0.5em 1.5em;
  cursor: pointer;
  position: relative;
  isolation: isolate;
  transition: all 500ms ease-in-out 100ms;

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
    background-image: linear-gradient(to right, transparent 0%, transparent 50%, #333 51%, #333 100%);
    background-size: 300% 100%;
    background-position: 0 0;
    transition: all 500ms ease-in-out;
  }

  &:hover::after {
    background-position: 100% 0;
  }
`;
