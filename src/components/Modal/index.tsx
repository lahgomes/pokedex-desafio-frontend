import { MdClose } from 'react-icons/md';
import { useModal } from '../../provider/ModalProvider';
import * as S from './styles';

export default function Modal() {
  const { isOpen, clickedPokemon, onCloseModal } = useModal();
  console.log('🚀 ~ Modal ~ clickedPokemon:', clickedPokemon);

  if (!isOpen) return null;

  return (
    <S.ModalRoot open={isOpen}>
      <S.ModalContent>
        <S.ModalHeader>
          <button onClick={onCloseModal}>
            <MdClose />
          </button>
        </S.ModalHeader>
        <S.ModalTitle>
          <h3>Título do Modal</h3>
        </S.ModalTitle>
        <div>Detalhes do pokemon clicado aqui</div>
      </S.ModalContent>
    </S.ModalRoot>
  );
}