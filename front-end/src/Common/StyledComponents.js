import { css } from "styled-components";

export const responsive = (props, width) => {
  return css`
    @media only screen and (max-width: ${width}) {
      ${props}
    }
  `;
};
