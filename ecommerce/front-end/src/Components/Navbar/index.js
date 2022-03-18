// Material UI
import { Search, ShoppingBasketOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";

// Styled Component
import { Container, Wrapper, Left, Center, Right, Language, SearchContainer, Input, Logo, MenuItem } from "./StyledComponents";

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{ color: "grey", fontSize: "16px", cursor: "pointer" }} />
          </SearchContainer>
        </Left>

        <Center>
          <Logo>E-Commerce</Logo>
        </Center>

        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Sign in</MenuItem>
          <MenuItem>
            <Badge badgeContent={0} color="primary">
              <ShoppingBasketOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
