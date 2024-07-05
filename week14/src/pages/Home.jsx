//rafce 누르면 나옴
import styled from 'styled-components'
import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <MenuDom>
        <Title>🩵 W E E K 1 2 🩵</Title>
        <StyledLink to="/books">
            멋쟁이의 추천 도서
        </StyledLink>
        <StyledLink to="/quiz">
           머쨍이 사자처럼 퀴즈
        </StyledLink>
    </MenuDom>
  )
}

export default Home

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

const StyledLink = styled(Link)`
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