// Responsive Mixin
import { responsive } from "../../Common/StyledComponents";

// Common Button Styling
import { buttonStyling } from "../../Common/StyledComponents";

// Styled Component Library
import styled from "styled-components";

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
  justify-content: center;
  row-gap: 50px;

  ${responsive(
    {
      padding: "10px",
      alignItems: "stretch",
      justifyContent: "flex-start",
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
  ${buttonStyling}

  padding: 0.8em 2em;
  background-color: transparent;
  border-radius: 2px;
  color: hsl(30, 90%, 55%);
  font-size: 16px;
  font-weight: 600;
  outline: 2px solid hsl(30, 90%, 55%);

  &::after {
    background-image: linear-gradient(to right, transparent 0%, transparent 50%, hsl(30, 90%, 55%) 51%, hsl(30, 90%, 55%) 100%);
  }

  &:hover::after {
    background-position: 100% 0;
  }
`;
