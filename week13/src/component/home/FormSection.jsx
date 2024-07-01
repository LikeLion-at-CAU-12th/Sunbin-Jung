import React, { useContext, useState } from 'react';
import { Button, Wrapper } from '../layout/common';
import Form from './Form';
import { ThemeColorContext } from '../../context/context';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Modal from '../layout/Modal';
import { useSetRecoilState } from 'recoil';
import { isSubmitedAtom } from '../../recoil/atom';

const FormSection = () => {
    const mode = useContext(ThemeColorContext);
    const navigate = useNavigate();
    const setIsSubmited = useSetRecoilState(isSubmitedAtom);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleSubmit = () => {
      // setIsSubmited(true);
      setIsModalOpen(true);
    }

    const handleConfirm = () => {
      navigate("/mypage");
    }

    const handleClose = () => {
        setIsModalOpen(false);
    }

    return (
        <Wrapper>
            <Form type='text' inputType='이름' />
            <Form type='email' inputType='이메일'/>
            <h3>행운의 아이템</h3>
            <RadioSection>
              <Form type="radio" inputType='💸' name="luckyItem"/>
              <Form type="radio" inputType='🍀' name="luckyItem"/>
              <Form type="radio" inputType='🐶' name="luckyItem"/>
            </RadioSection>
            <Button mode={mode.button} onClick={handleSubmit}>로그인</Button>
            <Modal isOpen={isModalOpen} onConfirm={handleConfirm} onClose={handleClose} />
        </Wrapper>
    );
}

export default FormSection;

const RadioSection = styled.div`
  display : flex;
  font-size : 2rem;
`;