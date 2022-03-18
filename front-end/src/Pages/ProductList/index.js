// Styled Components
import { Title, FilterContainer, Filter } from "./StyledComponents";

// Components
import ProductsListing from "../../Components/ProductsListing";

const ProductList = () => {
  return (
    <>
      <Title>Dresses</Title>

      <FilterContainer>
        <Filter>Filter 1</Filter>
        <Filter>Filter 2</Filter>
      </FilterContainer>

      <ProductsListing />
    </>
  );
};

export default ProductList;
