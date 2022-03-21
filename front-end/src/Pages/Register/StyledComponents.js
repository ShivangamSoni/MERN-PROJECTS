// Responsive Mixin
import { responsive } from "../../Common/StyledComponents";

// Common Button Styling
import { buttonStyling } from "../../Common/StyledComponents";

// Styled Component Library
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)),
    url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
  background-position: center;
  background-size: cover;
`;

export const Wrapper = styled.div`
  width: 600px;
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
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px 10px;
  margin-top: 20px;

  ${responsive(
    {
      gridTemplateColumns: "repeat(1, minmax(0, 1fr))",
    },
    "600px",
  )}
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

export const Agreement = styled.span`
  font-size: 12px;
  grid-column: span 2;

  ${responsive(
    {
      gridColumn: "1",
    },
    "600px",
  )}
`;

export const Button = styled.button`
  ${buttonStyling}

  font-size: 14px;
  padding: 0.7em 3em;
  outline: 2px solid #000;
  color: #000;

  &::after {
    background-image: linear-gradient(to right, transparent 0%, transparent 50%, #000 51%, #000 100%);
  }
`;
