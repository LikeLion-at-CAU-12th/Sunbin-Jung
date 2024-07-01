import React, { useContext } from 'react'
import { useRecoilValue, useResetRecoilState } from 'recoil'
import { emailAtom, isSubmitedAtom, luckyItemAtom, userNameAtom } from '../recoil/atom'
import { Button, Title, Wrapper } from '../component/layout/common';
import { ThemeColorContext } from '../context/context';
import { useNavigate } from 'react-router-dom';

const MyPage = () => {
    const userName = useRecoilValue(userNameAtom);
    const mode = useContext(ThemeColorContext);
    const navigate = useNavigate();

    const resetUsername = useResetRecoilState(userNameAtom);
    const resetEmail = useResetRecoilState(emailAtom);
    const resetItem = useResetRecoilState(luckyItemAtom);
    const reset = useResetRecoilState(isSubmitedAtom);

    const handleReset = () => {
        resetUsername();
        resetEmail();
        resetItem();
        reset();
        navigate("/");
    };

  return (
    <Wrapper>
        <Title>Welcome {userName} 👋🏿</Title>
        <Button mode={mode.button} onClick={handleReset}>로그아웃</Button>
    </Wrapper>
  )
}

export default MyPage