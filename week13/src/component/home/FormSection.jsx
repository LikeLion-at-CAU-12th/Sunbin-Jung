import React, { useContext } from 'react'
import { Button, Wrapper } from '../layout/common'
import Form from './Form'
import { ThemeColorContext } from '../../context/context'
import { useNavigate } from 'react-router-dom'
import { useSetRecoilState } from 'recoil'
import { isSubmitedAtom } from '../../recoil/atom'

const FormSection = () => {
    const mode = useContext(ThemeColorContext);
    const navigate = useNavigate();
    const setIsSubmited = useSetRecoilState(isSubmitedAtom)

    const handleBtn = () => {
        setIsSubmited(true);
        navigate("/mypage")
    }
  return (
    <Wrapper>
        <Form type='text' inputType='이름'/>
        <Form type='email' inputType='이메일'/>
        <Button mode={mode.button} onClick={handleBtn}>로그인</Button>
    </Wrapper>
  )
}

export default FormSection