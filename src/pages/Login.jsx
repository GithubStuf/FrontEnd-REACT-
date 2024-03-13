/* eslint-disable react/no-unescaped-entities */
import styled from 'styled-components';
import { mobile } from '../responsive';


const Container = styled.div`
   width: 100vw;
   height: 100vh;
   background: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url("/src/assets/login_bg.webp");
   background-position: center top;
   background-size: cover;
   background-repeat: no-repeat;
   display: flex;
   align-items: center;
   justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;

  ${mobile({
        width:"95vw"
    })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  border-radius: 10px;
  border: none;
  background-color: lightgrey;
  color: black;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #006e61;
  color: #F7CA01;
  border: 2px solid #F7CA01;
  border-radius: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: auto;
  margin-right: auto;
  cursor: pointer;
  
  &:hover{
    border: 2px solid #9b8215;
    font-weight: 900;
    padding: 13px 18px;
  }
`;
const ForgotPass = styled.a`
  margin-left: auto;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;
const DontHaveAccount = styled.p`

`;
const Link = styled.a`
  color: blue;
  margin: 5px 0;
  font-size: 16px;
  font-weight: 700;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
        <Wrapper>
          <Title>SIGN IN</Title>
          <Form>
          <Input placeholder="Email"/>
          <Input placeholder="Password"/>
          <ForgotPass>Forgot password?</ForgotPass>
          <Button>LOGIN</Button>
          <DontHaveAccount>
          Don't have an account?
          <Link>SING UP</Link>
          </DontHaveAccount>
          </Form> 
        </Wrapper>
        

    </Container>
  )
}


export default Login