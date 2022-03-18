// Styled Components
import { Container } from "./StyledComponents";

// Components
import CategoryItem from "../CategoryItem";

// Static Data
import CategoriesList from "./data";

const Categories = () => {
  return (
    <Container>
      {CategoriesList.map((item) => (
        <CategoryItem key={item.id} data={item} />
      ))}
    </Container>
  );
};

export default Categories;
