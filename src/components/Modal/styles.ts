import styled from 'styled-components';

export const ModalRoot = styled.dialog`
  width: 100%;
  height: 100%;
  inset: 0;
  position: fixed;
  padding: 24px 16px;
  z-index: 10;
  border: none;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContent = styled.div`
  max-height: 100vh;
  overflow: auto;
  padding: 16px;
  height: auto;
  background-color: #f9f9f9;
  border-radius: 8px;
  width: 100%;

  @media (min-width: 768px) {
    width: 856px;
    padding: 32px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-bottom: 24px;
`;

export const ModalTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`;
