import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { getQuestion } from '../apis/apis';

const Questions = () => {
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
      {data.length > 0 ? data.map((question, index) => (
        <div key={question.id}>
          <h3>{question.question}</h3>
          <ul>
            {question.choices.map((choice, idx) => (
              <li key={idx}>{choice}</li>
            ))}
          </ul>
        </div>
      )) : <div>불러오는 중</div>}
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