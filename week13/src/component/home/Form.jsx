import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { emailAtom, luckyItemAtom, userNameAtom } from '../../recoil/atom';

const Form = ({ type, inputType, children }) => {
  const [userName, setUserName] = useRecoilState(userNameAtom);
  const [email, setEmail] = useRecoilState(emailAtom);
  const [luckitem, setItem] = useRecoilState(luckyItemAtom);
  

  const onChange = (e) => {
    const value = e.target.value;
    if (inputType === '이름') {
      setUserName(value);
    } else if (inputType === '아이템') {
      setItem(value);
    } else if (inputType === '이메일') {
      setEmail(value);
    }
  };


  return (
    <>
      <div>{inputType}</div>
      <input type={type} onChange={onChange} />
    </>
  );
};

export default Form;