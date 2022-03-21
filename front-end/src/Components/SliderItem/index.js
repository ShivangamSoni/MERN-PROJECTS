// Styled Components
import { Slide, ImageContainer, Image, InfoContainer, Title, Desc, Button } from "./StyledComponents";

const SliderItem = ({ item: { bg, src, title, desc } }) => {
  return (
    <Slide bg={bg}>
      <ImageContainer>
        <Image src={src} />
      </ImageContainer>

      <InfoContainer>
        <Title>{title}</Title>
        <Desc>{desc}</Desc>
        <Button>Shop Now</Button>
      </InfoContainer>
    </Slide>
  );
};

export default SliderItem;
