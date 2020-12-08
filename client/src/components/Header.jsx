import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.nav`
  width: 100%;
  height: 85px;
  line-height: 55px;
  background-color: black;
  color: white;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
`;

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1300px;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Left = styled.div`
  flex-basis: auto;
  align-self: flex-start !important;
`;

const Right = styled.div`
  flex-basis: 10%;
  margin-right: 44px;

  a {
    color: #fff;
    text-decoration: none;
    cursor: pointer;
  }
`;


const Menu = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0;
  margin: 0 5px 0 0;
  list-style-type: none;
  color: #fff;
  line-height: 15px;
  padding-top: 20px;

  @media (max-width: 700px) {
    text.responsive {width: 50%}
  }
`;

const Logo = styled.span`
  font-family: "Poppins-ExtraBold";
  font-weight: bold;
  font-size: 30px;

  a {
    font-size: inherit;
    font-weight: inherit;
    font-family: inherit;
    color: #fff;
    text-decoration: none;
  }

  @media (max-width:700px) {
    flex-direction: column;
  }
`





export default function Header(props) {
  const { currentUser, handleLogout } = props;
  return (
    <Wrapper>
      <Container>
        <Nav>
          <Left>
            <Logo>
            <h1>Good or Bad?</h1>
            </Logo>
          </Left>
          <Right>
            
            <Menu>
      {
        currentUser ?
          <>
            <p>{currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </>
          :
          <Link to='/login'>Login/Register</Link>
       }
            
      {
        currentUser &&
        <>
          <Link to='/posts'>Posts</Link>
          <Link to='/reviews'>Your Options</Link>
        </>
        }
        </Menu>
          </Right>
          </Nav>
        </Container>
    </Wrapper>
  )
}
