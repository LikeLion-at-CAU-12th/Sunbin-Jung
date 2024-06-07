import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getQuestion } from '../apis/apis';

const Questions = ({ currentIndex }) => {
  const [data, setData] = useState([]);
  
  useEffect(()=> {
    const fetchData = async () => {
      const response = await getQuestion();
      setData(response.questions);
    };

    fetchData();
  },[])

  return (
    <QuestionDom>
      {data.length > 0 ? (
        <>
          <Question>{data[currentIndex].question}</Question>
          <ul>
            {data[currentIndex].choices.map((choice, idx) => (
              <Choices key={idx}>{choice}</Choices>
            ))}
          </ul>
        </>
      ) : (
        <div>불러오는 중</div>
      )}
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
  width: 100%;
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
  padding: 10px;
  margin-bottom: 35px;
`;

const Choices = styled.li`
  font-size: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  width: 200px;
  border-radius: 30px;
  background-color: #d9bbf5;
  padding: 10px;
  transition: background-color 0.3s ease;
  &:hover {
      background-color: #e98ab5;
  }

  &:active {
      background-color: pink;
  }

`