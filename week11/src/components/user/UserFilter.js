import React, { useState } from 'react';
import styled from 'styled-components';
import { filterType } from '../../constants/filtertype';
import { getGenderUser, getPerPage, getPartUser } from '../../apis/userlist';

const UserFilter = ({ setFilter, setUserData, setCurPage }) => {
  const [activeFilter, setActiveFilter] = useState('');

  const handleClick = async (type, param) => {
    if (type === "all") {
      const response = await getPerPage(1);
      setUserData(response);
      setCurPage(1);
    } else if (type === "gender") {
      const response = await getGenderUser(param);
      setUserData(response);
      setCurPage(1);
    } else if (type === "part") {
      const response = await getPartUser(param);
      setUserData(response);
      setCurPage(1);
    }
    setFilter(param);
    setActiveFilter(param); // Update the active filter
  }

  return (
    <FilterLayout>
      {filterType.map((data, idx) => 
        <FilterBox
          key={idx}
          $active={activeFilter === data.param}
          onClick={() => handleClick(data.type, data.param)}
        >
          {data.title}
        </FilterBox>
      )}
    </FilterLayout>
  );
}

export default UserFilter;

const FilterLayout = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  overflow-x: scroll;
  padding-left: 2rem;
  padding-right: 2rem;
  margin-top: 2rem;
  gap: 2rem;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const FilterBox = styled.div`
  display: flex;
  padding: 1rem 4rem;
  background-color: ${(props) => props.$active ? "#FFFFFF" : "orange"};
  border-radius: 1rem;
  font-size: 3rem;
  white-space: nowrap;
  &:hover {
    cursor: pointer;
    /* color: white; */
  }
  color: ${(props) => props.$active ? "black" : "white"};
`;
