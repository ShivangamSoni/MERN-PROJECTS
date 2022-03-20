// Responsive Mixin
import { responsive } from "../../Common/StyledComponents";

// Styled Component Library
import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  ${responsive(
    {
      padding: "10px",
    },
    "750px",
  )}
`;

export const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

// Top Section
export const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 20px;

  ${responsive(
    {
      rowGap: "10px",
    },
    "500px",
  )}
`;

export const TopTextWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  column-gap: 20px;

  ${responsive(
    {
      display: "none",
    },
    "700px",
  )}
`;

export const TopText = styled.span`
  text-decoration: 1px solid underline;
  text-transform: capitalize;
  cursor: pointer;
`;

export const TopButton = styled.button`
  appearance: none;
  border: none;
  outline: ${({ type }) => (type === "filled" ? "none" : "2px solid #000")};
  background-color: ${({ type }) => (type === "filled" ? "#333" : "transparent")};
  color: ${({ type }) => (type === "filled" ? "#fff" : "#333")};
  font-weight: 600;
  text-transform: uppercase;
  padding: 0.5em 1.5em;
  cursor: pointer;
  position: relative;
  isolation: isolate;
  transition: color 500ms ease-in-out;

  &:hover {
    color: ${({ type }) => (type === "filled" ? "#333" : "#fff")};
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to right,
      transparent 0%,
      transparent 50%,
      ${({ type }) => (type === "filled" ? "#fff" : "#333")} 51%,
      ${({ type }) => (type === "filled" ? "#fff" : "#333")} 100%
    );
    background-size: 300% 100%;
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
    "400px",
  )}
`;

// Bottom Section
export const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;

  ${responsive(
    {
      flexFlow: "column nowrap",
      rowGap: "10px",
    },
    "900px",
  )}
`;

// Info Section
export const Info = styled.div`
  flex: 3;
`;

export const Product = styled.div`
  display: flex;
  justify-content: space-between;

  ${responsive(
    {
      flexFlow: "column nowrap",
      rowGap: "5px",
    },
    "600px",
  )}
`;

export const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

export const Image = styled.img`
  width: 200px;
`;

export const Details = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  padding: 20px;
`;

export const ProductName = styled.span``;

export const ProductId = styled.span``;

export const ProductColor = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #${({ color }) => color};
`;

export const ProductSize = styled.span``;

export const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  row-gap: 10px;
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;

  ${responsive(
    {
      columnGap: "15px",
    },
    "600px",
  )}
`;

export const QuantityIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  padding: 10px;
  cursor: pointer;
`;

export const Quantity = styled.span`
  font-size: 24px;
`;

export const Price = styled.span`
  font-size: 30px;
  font-weight: 200;

  ${responsive(
    {
      marginBottom: "20px",
    },
    "600px",
  )}
`;

export const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 2px;
`;

// Summary Section
export const Summary = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  row-gap: 30px;
  border: 0.5px solid lightgrey;
  border-radius: 20px 0;
  padding: 20px;
`;

export const SummaryTitle = styled.h1`
  font-weight: 200;
  text-transform: uppercase;
`;

export const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: ${({ type }) => type === "total" && "700"};
  font-size: ${({ type }) => type === "total" && "24px"};
`;

export const SummaryItemText = styled.span``;

export const SummaryItemPrice = styled.span``;

export const Button = styled.button`
  appearance: none;
  border: none;
  outline: 2px solid #000;
  background-color: #fff;
  color: #333;
  font-weight: 600;
  text-transform: uppercase;
  padding: 0.8em 2em;
  cursor: pointer;
  position: relative;
  isolation: isolate;
  transition: color 700ms ease-in-out;

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
    transition: background-position 500ms linear;
  }

  &:hover::after {
    background-position: 100% 0;
  }
`;
