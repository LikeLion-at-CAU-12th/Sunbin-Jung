import React, { useContext } from 'react';
import styled from 'styled-components';
import { ThemeColorContext } from '../../context/context';
import { useRecoilValue } from 'recoil';
import { emailAtom, luckyItemAtom, userNameAtom } from '../../recoil/atom';

const Modal = ({ isOpen, onClose, onConfirm }) => {
  const mode = useContext(ThemeColorContext);
  const userName = useRecoilValue(userNameAtom);
  const email = useRecoilValue(emailAtom);
  const item = useRecoilValue(luckyItemAtom);

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent mode={mode.modal}>
        <h3>{`${userName} ${email} ${item}`}</h3>
        <h2>입력한 정보가 맞습니까?</h2>
        <Buttons>
          <button onClick={onConfirm}>확인</button>
          <button onClick={onClose}>취소</button>
        </Buttons>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width:50%;
  heigh:50%;
  background: rgba(0, 0, 0.5);
`;

const ModalContent = styled.div`
  padding: 2rem;
  border-radius: 8px;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
`;
