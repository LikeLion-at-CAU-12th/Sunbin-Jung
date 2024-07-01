// src/components/layout/common.js
import styled from "styled-components";

export const Wrapper = styled.div`
  font-family: 'Ownglyph_UNZ-Rg';
  src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2406-1@1.0/Ownglyph_UNZ-Rg.woff2') format('woff2');
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size : 20px;
`;

export const Button = styled.button`
  all: unset;
  background-color: ${(props) => props.mode};
  color: black;
  padding: 10px;
  border-radius: 24px;
  cursor: pointer;
  margin-top: 10px;
`;

export const Title = styled.div`
  font-size: 30px;
  margin: 20px;
`;