// React
import { useState } from "react";

// Material UI
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";

// Styled Components
import { Container, Wrapper, Arrow } from "./StyledComponents";

// Components
import SliderItem from "../../Components/SliderItem";

// Static Data
import Slides from "./data";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const handleSlide = (direction) => {
    setSlideIndex((prev) => {
      let newIndex;
      if (direction === "left") {
        newIndex = prev - 1;
        newIndex = newIndex < 0 ? 0 : newIndex;
      } else if (direction === "right") {
        newIndex = prev + 1;
        newIndex = newIndex >= Slides.length ? Slides.length - 1 : newIndex;
      } else {
        return prev;
      }

      return newIndex;
    });
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleSlide("left")} disabled={slideIndex === 0}>
        <ArrowBackIosNewOutlinedIcon />
      </Arrow>

      <Wrapper slideIndex={slideIndex}>
        {Slides.map((item) => (
          <SliderItem key={item.id} item={item} />
        ))}
      </Wrapper>

      <Arrow direction="right" onClick={() => handleSlide("right")} disabled={slideIndex === Slides.length - 1}>
        <ArrowForwardIosOutlinedIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
