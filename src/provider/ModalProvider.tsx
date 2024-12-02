import { createContext, ReactNode, useContext, useState } from 'react';
import Modal from '../components/Modal';

interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  types: {
    type: {
      name: string;
    };
  }[];
  abilities: {
    ability: {
      name: string;
    };
    slot: number;
  }[];
}

interface ModalContextProps {
  clickedPokemon: Pokemon | null;
  onCloseModal: () => void;
  onOpenModal: (pokemon: any) => void;
  isOpen: boolean;
}

export const ModalContext = createContext<ModalContextProps>({
  clickedPokemon: null,
  isOpen: false,
  onCloseModal: () => {},
  onOpenModal: () => {},
});

ModalContext.displayName = 'ModalContext';

const useModal = () => useContext(ModalContext);

const ModalProvider = ({ children }: Readonly<{ children: ReactNode }>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [clickedPokemon, setClickedPokemon] = useState<any>(null);

  const onCloseModal = () => {
    setClickedPokemon(null);
    setIsOpen(false);
  };

  const onOpenModal = (pokemon: Pokemon) => {
    setIsOpen(true);
    setClickedPokemon(pokemon);
  };

  return (
    <ModalContext.Provider
      value={{ onCloseModal, onOpenModal, isOpen, clickedPokemon }}
    >
      {children}
      {isOpen && <Modal />}
    </ModalContext.Provider>
  );
};

export default ModalProvider;

export { useModal };
