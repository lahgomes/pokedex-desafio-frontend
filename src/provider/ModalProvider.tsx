import { createContext, ReactNode, useContext, useState } from 'react';
import Modal from '../components/Modal';

interface ModalContextProps {
  onClickModal: () => void;
  isOpen: boolean;
}

export const ModalContext = createContext<ModalContextProps>({
  isOpen: false,
  onClickModal: () => {},
});

ModalContext.displayName = 'ModalContext';

const useModal = () => useContext(ModalContext);

const ModalProvider = ({ children }: Readonly<{ children: ReactNode }>) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClickModal = () => setIsOpen((prev) => !prev);

  return (
    <ModalContext.Provider value={{ onClickModal, isOpen }}>
      {children}
      {isOpen && <Modal />}
    </ModalContext.Provider>
  );
};

export default ModalProvider;

export { useModal };
