import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement';
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { mobile } from '../responsive';

const Container = styled.div``;

const Title = styled.h1`
    margin: 20px;
`;

const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
    ${mobile({
        margin:"0 20px",
        display: "flex",
        flexDirection: "Column"
    })}
`;

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;

    ${mobile({
        margin:"0"
    })}
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
    border: 1px solid goldenrod;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;

    ${mobile({
        margin:"10px 0 "
    })}
    `;
const Option = styled.option`
`;


const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>
                <Select>
                    <Option disabled selected>
                        Color
                    </Option>
                    <Option style={{backgroundColor:"white"}}>White</Option>
                    <Option style={{backgroundColor:"Black", color:"white"}}>Black</Option>
                    <Option style={{backgroundColor:"Red", color:"white"}}>Red</Option>
                    <Option style={{backgroundColor:"Blue", color:"white"}}>Blue</Option>
                    <Option style={{backgroundColor:"Yellow", color:"black"}}>Yellow</Option>
                    <Option style={{backgroundColor:"Green", color:"white"}}>Green</Option>
                </Select>
                <Select>
                    <Option disabled selected>
                        Size
                    </Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select>
                    <Option disabled selected>
                        Newest
                    </Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (desc)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList