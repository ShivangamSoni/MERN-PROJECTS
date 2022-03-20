// Styled Components
import { Container, Wrapper, Title, Form, Input, Agreement, Button } from "./StyledComponents";

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create Account</Title>
        <Form>
          <Input type="text" placeholder="First Name" />
          <Input type="text" placeholder="Last Name" />
          <Input type="text" placeholder="Username" />
          <Input type="email" placeholder="E-mail" />
          <Input type="password" placeholder="Password" />
          <Input type="password" placeholder="Confirm Password" />

          <Agreement>
            By creating an account, I consent to the processing of my personal data in accordance with the <strong>PRIVACY POLICY</strong>.
          </Agreement>
          <Button>Register</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
