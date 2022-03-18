// Material UI
import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";

// Styled Components
import { Container, Image, Info, Icon } from "./StyledComponents";

const ProductItem = ({ data: { src } }) => {
  return (
    <Container>
      <Image src={src} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>

        <Icon>
          <SearchOutlined />
        </Icon>

        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default ProductItem;
