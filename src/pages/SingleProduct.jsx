import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import styled from 'styled-components';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { AddOutlined, RemoveOutlined } from '@mui/icons-material';
import { mobile } from '../responsive';

const Container = styled.div`
    height: calc(100vh - 30px - 60px);;
    `;
const Wrapper = styled.div`
    padding: 50px;
    display: flex;

    ${mobile({
        padding:"10px", 
        flexDirection:"column",
        
    })}
`;
const ImageContainer = styled.div`
    flex: 1;
`;
const Image = styled.img`
    width: 100%;
    height: calc(100vh - 30px - 60px - 50px);
    object-fit: cover;

    ${mobile({
        height:"40vh", 
        flexDirection:"column",
        
    })}
`;

const InfoContainer = styled.div`
    flex: 1;
    padding: 0px 50px;

    ${mobile({
        padding:"10px",         
    })}
`;
const Title = styled.h1`
    font-weight: 200;
`;
const Description = styled.p`
    margin: 20px 0;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0;
    display: flex;
    justify-content: space-between;

    ${mobile({
        width:"100%",
    })}
`;
const Filter = styled.div`
    display: flex;
    align-items: center;
`;
const FilterTitle = styled.span`
    font-size: 20px;
    font-weight: 200;
`;
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin: 0 5px;
    cursor: pointer;

    &:hover{
      transform: scale(1.3);
      border:2px solid #F7CA01
    }
`;
const FilterSize = styled.select`
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  border: 2px solid #F7CA01;
  margin-left: 10px;
  padding: 5px;
`;
const FilterSizeOption = styled.option`

`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${mobile({
        width:"100%",
    })}
`;
const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 2px solid #F7CA01;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
`;
const Button = styled.button`
  padding: 15px;
  border: 2px solid #F7CA01;
  background-color: transparent;
  color: #006e61;
  border-radius: 10px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.4s ease;
  
  &:hover{
    background-color: #F7CA01;
  }
`;

const SingleProduct = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
          <ImageContainer>
            <Image src="/src/assets/jean.jpg"/>
          </ImageContainer>
            <InfoContainer>
              <Title>Denim Jumpsuit</Title>
              <Description>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae perferendis consequuntur excepturi, quod nihil eum, modi, iusto veniam necessitatibus praesentium consectetur illum. Distinctio quam, nulla iusto dolores eum quibusdam modi!
              </Description>
              <Price>$ 20</Price>
              <FilterContainer>
                <Filter>
                  <FilterTitle>Color</FilterTitle>
                  <FilterColor color="black"/>
                  <FilterColor color="darkblue"/>
                  <FilterColor color="gray"/>
                </Filter>
                <Filter>
                  <FilterTitle>Size</FilterTitle>
                  <FilterSize>
                    <FilterSizeOption>XS</FilterSizeOption>
                    <FilterSizeOption>S</FilterSizeOption>
                    <FilterSizeOption>M</FilterSizeOption>
                    <FilterSizeOption>L</FilterSizeOption>
                    <FilterSizeOption>XL</FilterSizeOption>
                  </FilterSize>
                </Filter>
              </FilterContainer>
              <AddContainer>
                <AmountContainer>
                  <RemoveOutlined/>
                  <Amount>1</Amount>
                  <AddOutlined/>
                </AmountContainer>
                <Button>ADD TO CART</Button>
              </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default SingleProduct