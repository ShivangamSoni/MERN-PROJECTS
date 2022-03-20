// Styled Components
import { Container, Wrapper, Title, Form, Input, Button, LinkWrapper, Link } from "./StyledComponents";

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Form>
          <Input type="email" placeholder="E-mail" />
          <Input type="password" placeholder="Password" />
          <Button>Sign in</Button>
          <LinkWrapper>
            Forgot Password? <Link>Reset Now</Link>.
          </LinkWrapper>
          <LinkWrapper>
            Don't have an Account? <Link>Create one now.</Link>
          </LinkWrapper>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
