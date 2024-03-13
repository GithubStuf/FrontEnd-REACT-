import styled from 'styled-components'
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Footer from '../components/Footer';
import { Add, Remove } from '@mui/icons-material';
import { mobile } from '../responsive';

const Container = styled.div`
    `;
const Wrapper = styled.div`
    padding: 30px;
    ${mobile({
        padding:"10px",
    })}
`;
const Title = styled.h1`
    font-weight: 300;
    text-align: center;
`;
const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
`;
const TopBotton = styled.button`
    padding: 10px;
    font-weight: 600;
    cursor: pointer;
    border-radius: 10px;
    border: ${props=>props.type === "filled" &&  "none"};
    background-color: ${props=>props.type === "filled" ? "#006e61" : "trasparent"};
    color: ${props=>props.type === "filled" &&  "black"};

    &:hover{
        color: goldenrod;
        background-color: linear-gradient(rgb(0, 186, 164), rgb(0, 109, 96)),;
    }
`;
const TopTexts = styled.div`
    ${mobile({
        display:"none",
    })}
`;
const TopText = styled.span`
    text-decoration: underline;
    cursor: pointer;
    margin: 0 10px;
`;
const Bottom = styled.div`
    display: flex;
    justify-content: space-between;

    ${mobile({
        flexDirection:"column",
    })}
`;
const Info = styled.div`
    flex: 3;
`;
const Product = styled.div`
    display: flex;
    justify-content: space-between;

    ${mobile({
        flexDirection:"column",
    })}
`;
const ProductDetails = styled.div`
    flex: 2;
    display: flex;
    `;
const Image = styled.img`
    width: 200px;
`;
const Details = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;
const ProductName = styled.span`
    
    `;
const ProductID = styled.span`
    
`;
const ProductColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props=>props.color};
`;
const ProductSize = styled.span`
    
    `;
const PriceDetails = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const ProductAmountContainer = styled.div`
    display: flex;
    align-items: center;
`;
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;

    ${mobile({
        margin:"5px 15px",
    })}
`;
const ProductPrice= styled.div`
    font-size: 30px;
    font-weight: 200;

    ${mobile({
        marginBottom:"20px",
    })}
`;
const Hr = styled.hr`
    background-color: goldenrod;
    border: none;
    height: 1px;
`;

const Summary = styled.div`
    flex: 1;
    border: 0.5px solid goldenrod;
    border-radius: 10px;
    padding: 20px;
    height: 50vh;
`;
const SummaryTitle = styled.h1`
    font-weight: 200;
`;
const SummaryItem = styled.div`
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    font-weight: ${props=>props.type === "total" && "500"};
    font-size: ${props=>props.type === "total" && "24px"};
`;
const SummeryItemText = styled.span`
`;
const SummaryItemPrice = styled.span`
`;
const Button = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #006e61;
    border-radius: 10px;
    border: none;

    &:hover{
        color: goldenrod;
        border: 2px solid goldenrod;
        line-height: 12px;
    }
`;


const Cart = () => {
  return (
    <Container>
        <Announcement/>
        <Navbar/>
        <Wrapper>
            <Title>YOU BAG</Title>
            <Top>
                <TopBotton>CONTINUE SHOPPING</TopBotton>
                <TopTexts>
                <TopText>Shopping Bag(2)</TopText>
                <TopText>Your Wishlist(0)</TopText>
                </TopTexts>
                <TopBotton type='filled'>CHECKOUT NOW</TopBotton>
            </Top>
            <Bottom>
                <Info>
                    <Product>
                        <ProductDetails>
                            <Image src="/src/assets/34.webp"/>
                            <Details>
                                <ProductName>
                                    <b>Product:</b>DOG BONE HAT
                                </ProductName>
                                <ProductID>
                                    <b>ID:</b>909090505050
                                </ProductID>
                                <ProductColor color="#676966"/>
                                <ProductSize>
                                    <b>Size:</b>XL
                                </ProductSize>
                            </Details>
                        </ProductDetails>
                        <PriceDetails>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>$ 30</ProductPrice>
                        </PriceDetails>
                    </Product>
                    <Hr/>
                    <Product>
                        <ProductDetails>
                            <Image src="/src/assets/32.webp"/>
                            <Details>
                                <ProductName>
                                    <b>Product:</b>JACKET
                                </ProductName>
                                <ProductID>
                                    <b>ID:</b>909090505050
                                </ProductID>
                                <ProductColor color="#67613e"/>
                                <ProductSize>
                                    <b>Size:</b>XL
                                </ProductSize>
                            </Details>
                        </ProductDetails>
                        <PriceDetails>
                            <ProductAmountContainer>
                                <Add/>
                                <ProductAmount>2</ProductAmount>
                                <Remove/>
                            </ProductAmountContainer>
                            <ProductPrice>$ 69.99</ProductPrice>
                        </PriceDetails>
                    </Product>
                </Info>
                <Summary>
                    <SummaryTitle>ORDER SUMMERY</SummaryTitle>
                    <SummaryItem>
                        <SummeryItemText>Subtotal</SummeryItemText>
                        <SummaryItemPrice>$ 99.99</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummeryItemText>Estimated Shipping</SummeryItemText>
                        <SummaryItemPrice>Free</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                        <SummeryItemText>Shipping Discount</SummeryItemText>
                        <SummaryItemPrice>$ -9.99</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                        <SummeryItemText>Total</SummeryItemText>
                        <SummaryItemPrice>$ 90</SummaryItemPrice>
                    </SummaryItem>
                    <Button>CHECKOUT NOW</Button>
                </Summary>
            </Bottom>
        </Wrapper>
        <Footer/>
    </Container>
  )
}

export default Cart