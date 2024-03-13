import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import styled from "styled-components";


const Container = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 300px;
    height: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f5fbfd;
    position: relative;
    border-radius: 10px;
    cursor: pointer;
    
    `;
const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    `;
const Image = styled.img`
    height: 75%;
    z-index: 2;
    `;
const Info = styled.div`
    opacity: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(10, 69, 83, 0.2);
    z-index: 3;display: flex;
    align-items: center;
    justify-content: center;
    border: 0.5px solid goldenrod;
    border-radius: 10px;
    transition: all 1s ease;
    
    
    &:hover{
        opacity: 1;
    }
    `;
const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    cursor: pointer;
    transition: all 0.5s ease;
    
    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1);
        border: 0.5px solid goldenrod;
    }

`;

const Product = ({item}) => {
  return (
    <Container>
        <Circle/>
        <Image src={item.img}/>
        <Info>
            <Icon>
                <ShoppingCartOutlined/>
            </Icon>
            <Icon>
                <SearchOutlined/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product