import styled, { css } from "styled-components";

// Styled Component
export const Container = styled.nav`
  height: 60px;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
`;

// Base Style for Left, Right & Center
const baseSectionStyle = css`
  flex: 1;
  display: flex;
  align-items: center;
`;

// Left Components:
export const Left = styled.div`
  ${baseSectionStyle}
`;

export const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  text-transform: uppercase;
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid gray;
  margin-left: 25px;
  padding: 5px;
  column-gap: 2px;
`;

export const Input = styled.input`
  appearance: none;
  background-color: transparent;
  outline: none;
  border: none;
  border-right: 1px solid gray;
`;

// Center Components:
export const Center = styled.div`
  ${baseSectionStyle}
  justify-content: center;
`;

export const Logo = styled.h1`
  font-weight: bold;
`;

// Right Components:
export const Right = styled.div`
  ${baseSectionStyle}
  justify-content: flex-end;
  column-gap: 25px;
`;

export const MenuItem = styled.a`
  font-size: 14px;
  cursor: pointer;
`;
