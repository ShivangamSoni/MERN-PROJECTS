// Responsive Mixin
import { responsive } from "../../Common/StyledComponents";

// Styled Component Library
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));

  ${responsive(
    {
      gridTemplateColumns: "auto",
    },
    "700px",
  )}
`;

// Left Section
export const Left = styled.div`
  display: flex;
  flex-flow: column nowrap;
  row-gap: 20px;
  padding: 20px;
`;

export const Logo = styled.h1``;

export const Description = styled.p``;

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

export const SocialIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #${({ color }) => color};
  color: #fff;
  cursor: pointer;
`;

// Center Section
export const Center = styled.div`
  padding: 20px;
`;

export const Title = styled.h3`
  margin-bottom: 30px;
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-flow: row wrap;
  row-gap: 15px;
`;

export const ListItem = styled.li`
  flex-basis: 50%;
  cursor: pointer;
`;

// Right Section
export const Right = styled.div`
  padding: 20px;
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  row-gap: 20px;
`;

export const ContactItem = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

export const Payment = styled.img`
  height: 40px;
  object-fit: contain;
`;
