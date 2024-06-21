import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getQuestion } from '../apis/apis';
import Evaluate from './Evaluate';

const Questions = ({ currentIndex }) => {
  const [data, setData] = useState([]);
  const [answers, setAnswers] = useState([0, 0, 0, 0, 0]);
  
  const handleClick = (questionIndex, choiceIndex) => {
    const newAnswers = [...answers +1];
    newAnswers[questionIndex] = choiceIndex;
    setAnswers(newAnswers);
  }

  useEffect(()=> {
    const fetchData = async () => {
      const response = await getQuestion();
      setData(response.questions);
    };

    fetchData();
  },[])

  return (
    <QuestionDom>
      { data.length > 0 ? (
        <>
          <Question>Q{currentIndex + 1} : {data[currentIndex].question}</Question>
          <ul>
            {data[currentIndex].choices.map((choice, idx) => (
              <ChoiceLabel key={idx}>
                <ChoiceInput 
                  type="radio"
                  name={`${currentIndex}`} //currentIndex 중에
                  value={`${idx}`} //하나만 선택되도록
                  checked={answers[currentIndex] === idx}//처음엔 1번 선택되있음
                  onChange={() => handleClick(currentIndex, idx)} // 선택 변경 시 handleClick 호출
                />
                {choice}
              </ChoiceLabel>
            ))}
          </ul>
        </>
      ) : (
        <h1>불러오는 중 🐠</h1>
      )}
      <Evaluate answers={answers}></Evaluate>
    </QuestionDom>
    )
}

export default Questions

const QuestionDom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 90%;
  margin: 20px;
  height: 500px;
  border-radius: 30px;
  background-color: beige;
`;

const Question = styled.div`
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  border-radius: 30px;
  background-color: #bbc8f5;
  padding: 20px;
  margin-bottom: 35px;
`;

const ChoiceLabel = styled.label`
  font-family: 'Ownglyph_meetme-Rg';
  src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2402_1@1.0/Ownglyph_meetme-Rg.woff2') format('woff2');
  font-weight: lighter;
  font-style: normal;
  font-size: 1.5rem;
  letter-spacing: 3px;
  border: none;
  display: flex;
  align-items: center;
  gap: 10px;
  width: 300px;
  border-radius: 30px;
  background-color: #d9bbf5;
  padding: 10px;
  margin-bottom: 10px;
  transition: background-color 0.3s ease;
  cursor: pointer;
  &:hover {
      background-color: #e98ab5;
  }

  &:active {
      background-color: pink;
  }
`;

const ChoiceInput = styled.input`
  margin-right: 10px;
  cursor: pointer;
`;
