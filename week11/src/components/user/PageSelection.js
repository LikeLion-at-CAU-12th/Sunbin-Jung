import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getPerPage } from '../../apis/userlist';

const PageSelection = ({ curPage, setUserData, setCurPage, userData }) => {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getPerPage(0); //page0 으로 받기
      setAllData(response);
    };

    fetchData();
  }, []);

  const handleClick = (page) => {
    const start = (page - 1) * 6;
    const end = start + 6;
    const paginatedData = allData.slice(start, end);
    setUserData(paginatedData);
    setCurPage(page);
  };

  return (
    <SelectionLayout>
      {[1, 2, 3, 4, 5].map((val) => (
        <PageBox
          key={val}
          $active={val === curPage}
          onClick={() => handleClick(val)}
        >
          {val}
        </PageBox>
      ))}
    </SelectionLayout>
  );
};

export default PageSelection;

const SelectionLayout = styled.div`
  display: flex;
  gap: 3rem;
  margin-bottom: 2rem;
`;

const PageBox = styled.div`
  font-size: 2rem;
  color: ${(props) => (props.$active ? '#000000' : '#C9C9C9')};
  &:hover {
    cursor: pointer;
    color: white;
  }
`;
