import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getQuestion } from '../apis/apis';
import Result from './Result';
import { useNavigate } from 'react-router-dom';

const Questions = ({ currentIndex }) => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [answers, setAnswers] = useState([0, 0, 0, 0, 0]);
  
  const handleClick = (questionIndex, choiceIndex) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = choiceIndex+1;
    setAnswers(newAnswers);
  }
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await getQuestion();
      setData(response.questions);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const areAllAnswersNonZero = answers.every(answer => answer !== 0);
    if (areAllAnswersNonZero) {
      navigate('/result', { state: { answers } });
    }
  }, [answers, navigate]);
  
  return (
    <QuestionDom>
      {data.length > 0 ? (
        <>
          <Question>Q{currentIndex + 1} : {data[currentIndex].question}</Question>
          <ul>
            {data[currentIndex].choices.map((choice, idx) => (
              <ChoiceLabel key={idx}>
                <ChoiceInput 
                  type="radio"
                  name={`${currentIndex}`}
                  value={`${idx}`}
                  checked={answers[currentIndex] === idx+1}
                  onChange={() => handleClick(currentIndex, idx)}
                />
                {choice}
              </ChoiceLabel>
            ))}
          </ul>
          
        </>
      ) : (
        <h1>불러오는 중 🐠</h1>
      )}
    </QuestionDom>
  );
}

export default Questions;

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
