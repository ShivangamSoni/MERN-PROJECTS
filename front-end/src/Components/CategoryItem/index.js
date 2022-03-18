// Styled Components
import { Container, Image, Info, Title, Button } from "./StyledComponents";

const CategoryItem = ({ data: { title, src } }) => {
  return (
    <Container>
      <Image src={src} />
      <Info>
        <Title>{title}</Title>
        <Button>Shop Now</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
