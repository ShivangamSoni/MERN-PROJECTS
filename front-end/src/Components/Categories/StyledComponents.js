// Responsive Mixin
import { responsive } from "../../Common/StyledComponents";

// Styled Component Library
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  column-gap: 3px;

  ${responsive(
    {
      flexFlow: "column nowrap",
      columnGap: "0",
      rowGap: "3px",
    },
    "650px",
  )}
`;
