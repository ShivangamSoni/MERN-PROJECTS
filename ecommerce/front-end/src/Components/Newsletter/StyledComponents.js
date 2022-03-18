import styled from "styled-components";

export const Container = styled.div`
  height: 60vh;
  background-color: #fcf5f5;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  row-gap: 20px;
`;

export const Title = styled.h1`
  font-size: 70px;
`;

export const Description = styled.p`
  font-size: 24px;
  font-weight: 300;
`;

export const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: #fff;
  display: grid;
  grid-template-columns: minmax(0, 8fr) minmax(0, 1fr);
`;

export const Input = styled.input`
  appearance: none;
  border: none;
  outline: none;
  padding-left: 20px;
`;

export const Button = styled.button`
  appearance: none;
  border: none;
  outline: 2px solid currentColor;
  background-color: teal;
  color: #fff;
  cursor: pointer;
  transition: all 300ms linear;

  &:hover {
    outline-offset: -0.3em;
    outline-color: #fcf5f5;
  }

  &:hover > svg {
    transform: scale(0.9);
  }
`;
