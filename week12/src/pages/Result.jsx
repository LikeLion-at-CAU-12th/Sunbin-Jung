import React, { useEffect, useState } from 'react'
import { getResult } from '../apis/apis';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Result = (correctCount) => {
  const navigate = useNavigate();
  const [data,setData] = useState([]);
  const [resultImg, setResultImg] = useState('');
  const [resultTitle, setResultTitle] = useState('');

  useEffect(()=> {
    const fetchData = async () => {
      const response = await getResult(correctCount);
      setData(response.data);
      setResultImg(data.resultImg);
      setResultTitle(data.resultTitle);
    };
    fetchData();
  },[])

  const goHome = () => {
    navigate("/");
  }

  return (
    <>
    <ResultDom>
      <h1>당신의 점수는?</h1>
      <h1>{resultTitle}</h1>
      <img src={resultImg} alt="Result" />
    </ResultDom>
    <Button onClick={goHome}>🏠</Button>
    </>
  )
};

export default Result

const ResultDom = styled.div`
  font-family: 'Ownglyph_meetme-Rg';
  src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2402_1@1.0/Ownglyph_meetme-Rg.woff2') format('woff2');
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

const Button = styled.div`
    font-size: 3rem;
    background-color: pink;
    color: #ffffff;
    border: none;
    border-radius: 25px;
    padding: 5px 15px;
    font-size: 1.5rem;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #e98ab5;
    }
    &:active {
        background-color: pink;
    }
`;