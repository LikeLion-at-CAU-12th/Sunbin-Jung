import React from 'react';
import { useRecoilState } from 'recoil';
import { emailAtom, luckyItemAtom, userNameAtom } from '../../recoil/atom';

const Form = ({ type, inputType, name }) => {
  const [userName, setUserName] = useRecoilState(userNameAtom);
  const [email, setEmail] = useRecoilState(emailAtom);
  const [luckitem, setItem] = useRecoilState(luckyItemAtom);

  const onChange = (e) => {
    const value = e.target.value;
    if (inputType === '이름') {
      setUserName(value);
    } else if (inputType === '이메일') {
      setEmail(value);
    }
  };

  const onRadioChange = (e) => {
    setItem(e.target.value);
  };

  if (type === 'radio') {
    return (
      <label>
        <input type="radio" name={name} value={inputType} onChange={onRadioChange} />
        {inputType}
      </label>
    );
  }

  return (
    <>
      <div>{inputType}</div>
      <input type={type} onChange={onChange} />
    </>
  );
};

export default Form;
