import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/Home";
import BookList from "./pages/BookList";
import BookDetail from "./pages/BookDetail";

//enter눌러야 import됨

function App() {
  return (
    <AppDom>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />}>
          <Route path=":id" element={<BookDetail/>} /> // books/:id 아니어도 됨
        </Route>
      </Routes>
    </AppDom>
  );
}


export default App;

const AppDom = styled.div`
    font-family: 'Ownglyph_meetme-Rg';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2402_1@1.0/Ownglyph_meetme-Rg.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
    /* font-family: 'GrandifloraOne-Regular';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_JAMO@1.0/GrandifloraOne-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal; */
  display: flex;
  width: 100%;
  min-height: 95vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;