import { Facebook, Instagram, MailOutline, PhoneOutlined, Pinterest, RoomOutlined, Twitter } from '@mui/icons-material';
import styled from "styled-components";
import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;
    display: flex;
    flex-direction: row;
    padding: 20px;
    background-color: #006e61;

    ${mobile({
        flexDirection: "column"
    })}
`;
const Left = styled.div`
    flex:1;
`;
const Logo = styled.h1``;
const Description = styled.p`
    margin: 20px 0px;
`;
const SocialContainer = styled.div`
    display: flex;
`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
`;
const Center = styled.div`
    flex:1;
    padding: 20px;

    ${mobile({
        display:"none"
    })}
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`;
const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`;

const Right = styled.div`
    flex:1;
    padding: 20px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;
const Payment = styled.img`
    width: 50%;
`;


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>M O N S T E R</Logo>
            <Description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure aut corporis sint, tempore illum, nobis quibusdam, consectetur repudiandae in ratione optio exercitationem delectus officia neque quasi laborum nihil. Animi, perspiciatis!</Description>
            <SocialContainer>
                <SocialIcon color='3b5999'>
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color='e4405f'>
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color='55acee'>
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color='e60023'>
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man Fashion</ListItem>
                <ListItem>Women Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Acount</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
                <RoomOutlined sx={{marginRight:"10px"}}/> 000 Monster Path , Numidia
            </ContactItem>
            <ContactItem>
                <PhoneOutlined sx={{marginRight:"10px"}}/>+1 000 00 00
            </ContactItem>
            <ContactItem>
                <MailOutline sx={{marginRight:"10px"}}/>contact@monster.dev
            </ContactItem>
            <Payment src="/assets/payment.png"/>
        </Right>
    </Container>
  )
}

export default Footer
