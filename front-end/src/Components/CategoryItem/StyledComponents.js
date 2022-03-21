// Styled Components Library
import styled from "styled-components";

// Common Button Styling
import { buttonStyling } from "../../Common/StyledComponents";

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
  ${buttonStyling}
`;
