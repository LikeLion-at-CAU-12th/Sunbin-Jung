//rafce 누르면 나옴
import styled from 'styled-components'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const[isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('access');
    if(token) {
      setIsLoggedIn(true);
    }
  },[]);

  const handleQuiz = () => {
    if(isLoggedIn) {
      navigate('/quiz');
    }else{
      alert('로그인이 필요한 기능입니다');
      navigate("/login");
    }
  };

  const handleClick = () => {
    if(isLoggedIn) {
      localStorage.removeItem('access');
      localStorage.removeItem('refresh');
      setIsLoggedIn(false);
    } else {
      navigate('/login');
    }
  }
  return (
    <>
    <MenuDom>
        <Title>🩵 W E E K 1 2 🩵</Title>
        <StyledLink to="/books">
            멋쟁이의 추천 도서
        </StyledLink>
        <StyledLink onClick={handleQuiz}>
           머쨍이 사자처럼 퀴즈
        </StyledLink>
    </MenuDom>
    <Footer onClick={handleClick}>
        {isLoggedIn ? '로그아웃' : '로그인'}
    </Footer>
    </>
  )
}

export default Home

const Footer = styled.div`
  text-decoration: none;
  color : black;
  font-size : 20px;
`

const MenuDom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 100%;
  margin: 20px;
`;

const Title = styled.div`
  font-size: 40px;
  color: #535353;
  font-weight: 700;
`;

const StyledLink = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 100px;
  font-size: 25px;
  color: #4a4a4a;
  background-color: #b8edfb;
  border-radius: 20px;
  cursor: pointer;
  text-decoration: none;
  font-weight: 500;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
`;