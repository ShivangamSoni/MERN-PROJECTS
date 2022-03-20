// Material UI
import { Add, Remove } from "@mui/icons-material";

// Styled Components
import {
  Container,
  Title,
  Top,
  TopTextWrapper,
  TopText,
  TopButton,
  Bottom,
  Info,
  Product,
  ProductDetail,
  Image,
  Details,
  ProductName,
  ProductId,
  ProductColor,
  ProductSize,
  PriceDetail,
  QuantityContainer,
  QuantityIcon,
  Quantity,
  Price,
  Hr,
  Summary,
  SummaryTitle,
  SummaryItem,
  SummaryItemText,
  SummaryItemPrice,
  Button,
} from "./StyledComponents";

const Cart = () => {
  return (
    <Container>
      <Title>Your Cart</Title>
      <Top>
        <TopButton>Continue Shopping</TopButton>
        <TopTextWrapper>
          <TopText>Shopping Cart(2)</TopText>
          <TopText>Your Wishlist</TopText>
        </TopTextWrapper>
        <TopButton type="filled">Checkout Now</TopButton>
      </Top>

      <Bottom>
        <Info>
          <Product>
            <ProductDetail>
              <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
              <Details>
                <ProductName>
                  <b>Product:</b> Shoes
                </ProductName>
                <ProductId>
                  <b>ID:</b> 12345178068
                </ProductId>
                <ProductColor color="333" />
                <ProductSize>
                  <b>Size:</b> 8
                </ProductSize>
              </Details>
            </ProductDetail>

            <PriceDetail>
              <QuantityContainer>
                <QuantityIcon>
                  <Remove />
                </QuantityIcon>

                <Quantity>1</Quantity>

                <QuantityIcon>
                  <Add />
                </QuantityIcon>
              </QuantityContainer>

              <Price>$ 22.89</Price>
            </PriceDetail>
          </Product>

          <Hr />

          <Product>
            <ProductDetail>
              <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
              <Details>
                <ProductName>
                  <b>Product:</b> Shoes
                </ProductName>
                <ProductId>
                  <b>ID:</b> 12345178068
                </ProductId>
                <ProductColor color="333" />
                <ProductSize>
                  <b>Size:</b> 8
                </ProductSize>
              </Details>
            </ProductDetail>

            <PriceDetail>
              <QuantityContainer>
                <QuantityIcon>
                  <Remove />
                </QuantityIcon>

                <Quantity>1</Quantity>

                <QuantityIcon>
                  <Add />
                </QuantityIcon>
              </QuantityContainer>

              <Price>$ 22.89</Price>
            </PriceDetail>
          </Product>
        </Info>

        <Summary>
          <SummaryTitle>Order Summary</SummaryTitle>

          <SummaryItem>
            <SummaryItemText>Sub Total</SummaryItemText>
            <SummaryItemPrice>$ 40</SummaryItemPrice>
          </SummaryItem>

          <SummaryItem>
            <SummaryItemText>Estimated Shipping</SummaryItemText>
            <SummaryItemPrice>$ 5.90</SummaryItemPrice>
          </SummaryItem>

          <SummaryItem>
            <SummaryItemText>Shipping Discount</SummaryItemText>
            <SummaryItemPrice>$ -5.90</SummaryItemPrice>
          </SummaryItem>

          <SummaryItem type="total">
            <SummaryItemText>Total</SummaryItemText>
            <SummaryItemPrice>$ 40</SummaryItemPrice>
          </SummaryItem>

          <Button>Checkout Now</Button>
        </Summary>
      </Bottom>
    </Container>
  );
};

export default Cart;
