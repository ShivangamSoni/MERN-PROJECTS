// Responsive Mixin
import { responsive } from "../../Common/StyledComponents";

// Styled Component Library
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 50px;
  padding: 50px;

  ${responsive(
    {
      gridTemplateColumns: "auto",
      padding: "20px",
      columnGap: "0",
      rowGap: "5px",
    },
    "700px",
  )}
`;

export const ImgContainer = styled.div``;

export const Img = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: contain;

  ${responsive(
    {
      height: "80%",
    },
    "700px",
  )}
`;

export const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  row-gap: 15px;
`;

export const Title = styled.h2`
  font-weight: 200;
  font-size: 52px;
`;

export const Desc = styled.p``;

export const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

export const FilterContainer = styled.div`
  width: 60%;
  display: flex;
  flex-flow: row wrap;
  align-items: baseline;
  justify-content: space-between;
  margin-top: 20px;
  gap: 10px 20px;
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

export const FilterTitle = styled.h3`
  font-size: 20px;
  font-weight: 200;
`;

export const FilterColor = styled.span`
  width: 20px;
  height: 20px;
  outline: 1px solid #000;
  outline-offset: 2px;
  background-color: #${({ color }) => color};
  cursor: pointer;
  transition: all 150ms linear;

  &:hover {
    border-radius: 50%;
    outline: none;
  }
`;

export const Select = styled.select`
  padding: 5px;
`;

export const Option = styled.option``;

export const BuyContainer = styled.div`
  width: 60%;
  display: flex;
  flex-flow: row wrap;
  align-items: baseline;
  justify-content: space-between;
  margin-top: 20px;
  gap: 10px 20px;
`;

export const QuantityContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
  font-weight: 700;
`;

export const Quantity = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border: 2px solid hsl(35, 100%, 50%);
  border-radius: 10px;
`;

export const Icon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  padding: 5px;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    outline: 2px solid hsl(35, 100%, 50%);
  }
`;

export const Button = styled.button`
  appearance: none;
  border: none;
  outline: 2px solid currentColor;
  padding: 0.7em 1.5em;
  background-color: hsl(35, 100%, 50%);
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  transition: all 300ms linear;

  &:hover {
    outline-offset: -0.3em;
    outline-color: #fff;
  }
`;
