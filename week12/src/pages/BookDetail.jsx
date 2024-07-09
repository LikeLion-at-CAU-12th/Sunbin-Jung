import { useParams, Link, Outlet  } from 'react-router-dom'
import styled from 'styled-components';
import axios from 'axios';
import React, { useEffect, useState } from 'react'


const BookDetail = () => {
    const params = useParams();
    const id = params.id;
    const [books,setBooks] = useState([]);
    const [likes, setLikes] = useState(0);

    const updateLikes = ()=>{
        setLikes(likes +1);
    }

    useEffect(()=>{
        //화면에 처음 띄울 때 실행되는 함수
        //데이터패칭은 비동기니까 async,await필요
        const fetchBooks = async() => {
            const response = await axios.get('/databases/books.json');
            setBooks(response.data);
        };
        fetchBooks(); //이거 실행되기 전에 book을 선언해야함 그래서 if문으로
    },[]);

//page id가 바뀔 때 0으로 바뀌게 하는 함수
    useEffect(()=>{
        setLikes(0)
    },[id]);

    const book = books.find((b)=>b.id===parseInt(id));

    if(!book) {
        return <div>책을 찾을 수 없습니다</div> 
    }
  return (
    <div>
        <h1>{book.title}</h1>
        <h3>{book.author}</h3>
        <p>{book.description}</p>
        <Button onClick={updateLikes}>
            <Icon>🍀</Icon> {likes}
        </Button>
    </div>
  )
}

const Button = styled.button`
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
    background-color: #f48787;
  }

  &:active {
    background-color: pink;
  }
`;

const Icon = styled.span`
  margin-right: 8px;
  font-size: 20px;
`;

export default BookDetail