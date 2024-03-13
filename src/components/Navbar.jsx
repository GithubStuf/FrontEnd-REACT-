/*// import { Search} from '@mui/icons-material';


// import styled from 'styled-components'

// import shopping_cart from '../assets/shopping-cart-icon.png'

// const Container = styled.div`
//     height: 60px;
//     background-color: #f3f1f1;
// `;

// const Wrapper = styled.div`
//   padding: 10px 20px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
// `;

// const Left = styled.div`
//   flex:1;
//   display: flex;
//   align-items: center;
// `;
// const Language = styled.span`
//   font-size: 14px;
//   cursor: pointer;
// `;
// const SearchContainer = styled.div`
//   border: 0.5px solid #DAA520;
//   border-radius: 10px;
//   display: flex;
//   align-items: center;
//   margin-left: 25px;
//   padding: 5px;
//   width: 100%;
//   `;
// const Input = styled.input`
//   border: none;
//   width: 100%;
//   background-color: transparent;
// `;
// const Center = styled.div`
//   flex:1;
//   text-align: center;
// `;

// const Logo = styled.h1`
//   font-weight: bold;
// `;
// const Right = styled.div`
//   flex:1;
//   display: flex;
//   align-items: center;
//   justify-content: flex-end;
// `;

// const MenuItem = styled.div`
//   font-size: 14px;
//   cursor: pointer;
//   margin-left: 25px;
//   display: flex;
//   justify-content: center;
//   align-items: center;

//   &:hover{
//     border-bottom: 3px solid #DAA520;
//   }
// `;
// const Cart = styled.img`
//   height: 3vh;
// `;
// const Badge = styled.div`
//   color: #f7ca01;
//   background-color: #005249;
//   font-size: 14px;
//   font-weight: bold;
//   border-radius: 5px;
//   position: relative;
//   top: -15px;
//   right: 0px;
//   width: 0.7rem;
//   text-align: center;
// `;
// const Navbar = () => {
//   return (
//     <Container>
//       <Wrapper>
//       <Left>
//         <Language>EN</Language>  
//         <SearchContainer>
//         <Input/>
//         <Search sx={{color:"#006E61", fontSize:16}}/>
//         </SearchContainer>    
//       </Left>
//       <Center>
//         <Logo>M O N S T E R</Logo>
//         </Center>
//       <Right>
//         <MenuItem>R E G I S T E R</MenuItem>
//         <MenuItem>S I G N  I N</MenuItem>
//         <MenuItem>
//         <div><Cart src={shopping_cart} /></div>
//         <Badge>4</Badge>
//         </MenuItem>
//       </Right>
//       </Wrapper>
//     </Container>
//   )
// }

// export default Navbar
*/
import { FaBars} from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { CiLight, CiSearch, CiGlobe } from "react-icons/ci";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div``;
const Script = styled.script``;
const Link = styled.link``;
const Nav = styled.nav`
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({
    padding: "5px 10px",
    width: "100vw"
  })}
`;
const Logo = styled.h1`
  font-weight: bold;

  ${mobile({
    flex:1,
    fontSize:"24px",
  })}
`;

const SearchContainer = styled.div`
  width: 50%;
  border: 0.5px solid #DAA520;
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;

  ${mobile({
    width: "40%",
    marginRight: "auto",
    marginLeft: "0"
  })}
  `;
const SearchInput = styled.input`
  border: none;
  width: 100%;
  background-color: transparent;
`;

const Icon = styled.label`
  display: none;
  font-size: 1.2em;
  cursor: pointer;


  ${mobile({
    display: "block",
    cursor: "pointer",
    position: "relative",
    right: "24px",
    marginLeft:"10%",
  })}
`;
const Input = styled.input``;
const LinksWrapper = styled.div``;
const Backdrop = styled.div`
  display: none;
  animation: 0.4s ease-in-out fadeIn forwards;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0);
  cursor: pointer;
`;
const CloseBtn = styled.label`
  display: none;
  font-size: 1.2em;
  cursor: pointer;

  &:hover{
    color: #000;
    cursor: pointer;
  }

  ${mobile({
    display: "block",
    cursor: "pointer",
    position: "absolute",
    top: "24px",
    right: "-90vh",
    color: "#575757",
    fontSize: "2em",
    zIndex: "3",
    transition: "0.3s ease-in-out",
  })}
`;
const Ul = styled.ul`
  display: flex;
  list-style: none;

  ${mobile({
    position: "absolute",
    top: 0,
    height: "100%",
    width: "90%",
    right: "-90%",
    background: "#fff",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    zIndex: "2",
    transition: "0.3s ease-in-out",
  })}
`;
const Li = styled.li`
   margin-right: 24px;
`;
const Alink = styled.a`
  text-decoration: none;
  color: #575757;
  letter-spacing: -0.5px;

  &:hover{
    color: goldenrod;
  }

  ${mobile({
    marginRight: 0,
    marginBottom: "50px",
    fontSize: "1.5em",
  })}
`;
const Navbar = () => {
  return (
    <Container>
      <Script src="/src/81c2c05f29.js"/>
      <Link rel="stylesheet" href="/src/style.css" />
      <Nav className="navbar">
        <Logo className="logo">E-Commerce</Logo>
           <SearchContainer>
           <SearchInput/>
           <CiSearch sx={{color:"#006E61", fontSize:16}}/>
           </SearchContainer> 
        <Icon htmlFor="toggler" className="icon"><FaBars /></Icon>
        <Input type="checkbox" id="toggler" />
        <LinksWrapper className="links-wrapper active">
          <Backdrop className="backdrop"></Backdrop>
          <CloseBtn htmlFor="toggler" className="close-btn"><FaTimes/></CloseBtn>
          <Ul className="links">
            <Li><Alink href="#">Sign Up</Alink></Li>
            <Li><Alink href="#">Sign In</Alink></Li>
            <Li><CiGlobe/></Li>  
            <Li><CiLight /></Li>  
          </Ul>
        </LinksWrapper>
      </Nav>
    </Container>
  )
}

export default Navbar