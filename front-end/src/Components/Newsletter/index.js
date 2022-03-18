// Material UI
import { Container, Title, Description, InputContainer, Input, Button } from "./StyledComponents";

// Styled Components
import { Send } from "@mui/icons-material";

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates for your Favorite Products.</Description>
      <InputContainer>
        <Input placeholder="Your E-mail" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
