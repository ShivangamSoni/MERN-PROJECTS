// Material UI
import { Facebook, Instagram, MailOutline, PhoneOutlined, RoomOutlined, Twitter, YouTube } from "@mui/icons-material";

// Styled Components
import { Container, Left, Center, Right, Logo, Description, SocialContainer, SocialIcon, Title, List, ListItem, ContactItem, Payment } from "./StyledComponents";

// Static Useful Links Data
const USEFUL_LINKS = [
  {
    id: 1,
    title: "Home",
  },
  {
    id: 2,
    title: "Cart",
  },
  {
    id: 3,
    title: "Man Fashion",
  },
  {
    id: 4,
    title: "Woman Fashion",
  },
  {
    id: 5,
    title: "Accessories",
  },
  {
    id: 6,
    title: "My Account",
  },
  {
    id: 7,
    title: "Order Tracking",
  },
  {
    id: 8,
    title: "Wishlist",
  },
  {
    id: 9,
    title: "Terms & Conditions",
  },
];

const FooterArea = () => {
  return (
    <Container>
      <Left>
        <Logo>E-Commerce</Logo>

        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur commodo auctor tristique. Etiam at erat magna. Sed ac augue sem. Phasellus consectetur, lorem ac
          tristique.
        </Description>

        <SocialContainer>
          <SocialIcon color={"3B5999"}>
            <Facebook />
          </SocialIcon>

          <SocialIcon color={"E4405F"}>
            <Instagram />
          </SocialIcon>

          <SocialIcon color={"55ACEE"}>
            <Twitter />
          </SocialIcon>

          <SocialIcon color={"E60023"}>
            <YouTube />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>Useful Links</Title>

        <List>
          {USEFUL_LINKS.map((item) => (
            <ListItem key={item.id}>{item.title}</ListItem>
          ))}
        </List>
      </Center>

      <Right>
        <Title>Contact Us</Title>

        <ContactItem>
          <RoomOutlined />
          San Jose (HQ), CA United States 2025 Hamilton Ave
        </ContactItem>
        <ContactItem>
          <PhoneOutlined />
          (22) 66690000
        </ContactItem>
        <ContactItem>
          <MailOutline />
          reach-us@e-comm.com
        </ContactItem>

        <Payment
          src={
            "https://imgs.search.brave.com/XvmrXhnBL06EypSEu65m6klL9WO7fhxLugTj8e4awy0/rs:fit:1200:512:1/g:ce/aHR0cHM6Ly90aGlu/a2luZ3BhcmFkb3gu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIwLzAxL3BheW1l/bnQtbWV0aG9kLXBu/Zy10cmFuc3BhcmVu/dC1pbWFnZXMtMTc1/MzYyLTY2NTk4NzEu/cG5n"
          }
        />
      </Right>
    </Container>
  );
};

export default FooterArea;
