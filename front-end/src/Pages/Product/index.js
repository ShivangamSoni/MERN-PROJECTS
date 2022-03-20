// Material UI
import { Add, Remove } from "@mui/icons-material";

// Styled Components
import {
  Container,
  ImgContainer,
  Img,
  InfoContainer,
  Title,
  Desc,
  Price,
  FilterContainer,
  Filter,
  FilterTitle,
  FilterColor,
  Select,
  Option,
  BuyContainer,
  QuantityContainer,
  Quantity,
  Icon,
  Button,
} from "./StyledComponents";

const Product = () => {
  return (
    <Container>
      <ImgContainer>
        <Img src="https://images.freeimages.com/images/large-previews/fed/xbox-360-3-1240936.jpg" />
      </ImgContainer>

      <InfoContainer>
        <Title>X-Box Controller</Title>
        <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem consequuntur eveniet nam tempore. Dolorum omnis rerum velit, aliquam numquam tenetur!</Desc>
        <Price>$ 20</Price>

        <FilterContainer>
          <Filter>
            <FilterTitle>Color</FilterTitle>
            <FilterColor color="000" />
            <FilterColor color="00F" />
            <FilterColor color="4F4F4F" />
          </Filter>

          <Filter>
            <FilterTitle>Size</FilterTitle>
            <Select>
              <Option selected>XS</Option>
              <Option>S</Option>
              <Option>M</Option>
              <Option>L</Option>
              <Option>XL</Option>
              <Option>XXL</Option>
            </Select>
          </Filter>
        </FilterContainer>

        <BuyContainer>
          <QuantityContainer>
            <Icon>
              <Remove />
            </Icon>
            <Quantity>1</Quantity>
            <Icon>
              <Add />
            </Icon>
          </QuantityContainer>

          <Button>Add to Cart</Button>
        </BuyContainer>
      </InfoContainer>
    </Container>
  );
};

export default Product;
