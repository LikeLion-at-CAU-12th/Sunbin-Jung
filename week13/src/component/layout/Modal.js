import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeColorContext } from '../../context/context';
import { useRecoilValue } from 'recoil';
import { emailAtom, luckyItemAtom, userNameAtom } from '../../recoil/atom';
import { Button } from './common';

const Modal = ({ isOpen, onClose, onConfirm }) => {
  const mode = useContext(ThemeColorContext);
  const userName = useRecoilValue(userNameAtom);
  const email = useRecoilValue(emailAtom);
  const item = useRecoilValue(luckyItemAtom);

  if (!isOpen) return null;

  return (
    <ModalOverlay mode={mode.main}>
      <ModalContent>
        <h3>{`이름 : ${userName} 메일 : ${email} 행운의 아이템 : ${item}`}</h3>
        <h3>입력한 정보가 맞습니까?</h3>
        <Buttons>
          <Button mode={mode.sub} onClick={onConfirm}>확인</Button>
          <Button mode={mode.sub} onClick={onClose}>취소</Button>
        </Buttons>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;

const ModalOverlay = styled.div`
  display : flex;
  position: fixed;
  top: 10rem;
  left: 20rem;
  right: 20rem;
  bottom: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #ffdab9;
  text-align : center;
  background-color: ${(props) => props.mode};
`;

const ModalContent = styled.div`
  padding: 2rem;
  border-radius: 8px;
  text-align : center;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
`;
