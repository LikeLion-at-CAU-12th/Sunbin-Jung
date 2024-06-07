import React from 'react'
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Questions from './Questions.jsx';

const Quiz = (num) => {
    const navigate = useNavigate();
    const goToHome = () => {
        navigate("/");
    }

    const goBefore = () => {
        navigate("/{num-1}")
    }

  return (
    // if(num===1){
    // <QuizDom>
    //     <h1>당신은 멋잘알인가요?</h1>
    //     <ButtonDom>
    //         <Button onClick={goBefore}>뒤로 가기</Button>
    //         <Button>다음 문제</Button>
    //     </ButtonDom>
    // </QuizDom>
    // }
    <QuizDom>
        <h1>당신은 멋잘알인가요?</h1>
        <Questions></Questions>
        <ButtonDom>
            <Button onClick={goToHome}>뒤로 가기</Button>
            <Button>다음 문제</Button>
        </ButtonDom>
    </QuizDom>
  )
}

export default Quiz

const QuizDom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 80vh;
  margin: 20px;
  border-radius: 20px;
`;

const ButtonDom = styled.div`
    display: flex;
    flex-direction: row;
    gap: 300px;
`
const Button = styled.button`
    font-family: 'Ownglyph_meetme-Rg';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2402_1@1.0/Ownglyph_meetme-Rg.woff2') format('woff2');
    font-weight: lighter;
    font-style: normal;
    background-color: pink;
    color: #ffffff;
    border: none;
    border-radius: 25px;
    padding: 5px 15px;
    font-size: 16px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #e98ab5;
    }

    &:active {
        background-color: pink;
    }
`;