// Styled Components
import { Container } from "./StyledComponents";

// Components
import ProductItem from "../ProductItem";

// Static Data
import ProductsList from "./data";

const ProductsListing = () => {
  return (
    <Container>
      {ProductsList.map((item) => (
        <ProductItem key={item.id} data={item} />
      ))}
    </Container>
  );
};

export default ProductsListing;
