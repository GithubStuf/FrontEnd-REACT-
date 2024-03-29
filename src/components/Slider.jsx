import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import styled from 'styled-components'
import {sliderItems} from '../data'
import { useState } from 'react';
import { mobile } from '../responsive';

const Container = styled.div`
    width: 100%;
    height: calc(100vh - 30px - 60px);
    display: flex;
    position: relative;
    align-items: center;
    overflow: hidden;
    position: relative;
    ${mobile({
        display:"none",
    })}
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #ffffff;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left:${props=>props.direction === "left" && "10px"};
    right:${props=>props.direction === "right" && "10px"};
    cursor: pointer;
    opacity: 1;
    z-index: 2;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props=>props.bg};
`;
const ImageContainer = styled.div`
height: 100%;
    flex: 1;
    display: flex;
    justify-content: center;
`;
const Image = styled.img`height: 86%;`;
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`;
const Title = styled.h1`
    font-size: 70px;
`;
const Description = styled.p`
    margin:50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
    border-radius: 10px;
    color: #006E61;
    border: 1px solid goldenrod;
`;

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else if(direction === "right") {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <Container>
        <Arrow direction="left" onClick={()=>handleClick('left')}>
            <ArrowLeftOutlined/>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item)=>(
                <Slide bg={item.bg} key={item.id}>
                <ImageContainer>
                    <Image src={item.img}/>
                </ImageContainer>
                <InfoContainer>
                    <Title>{item.title}</Title>
                    <Description>{item.desc}</Description>
                    <Button>SHOP NOW</Button>
                </InfoContainer>
                </Slide>
            ))};
        </Wrapper>
        <Arrow direction="right" onClick={()=>handleClick('right')}>
            <ArrowRightOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider