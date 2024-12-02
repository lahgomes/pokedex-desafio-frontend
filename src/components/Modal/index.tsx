import { MdClose } from 'react-icons/md';
import { useModal } from '../../provider/ModalProvider';
import * as S from './styles';

export default function Modal() {
  const { isOpen, clickedPokemon, onCloseModal } = useModal();

  if (!isOpen || !clickedPokemon) return null;

  return (
    <S.ModalRoot open={isOpen}>
      <S.ModalContent>
        <S.ModalHeader>
          <button onClick={onCloseModal}>
            <MdClose />
          </button>
        </S.ModalHeader>
        <S.ModalBody>
          <img
            src={clickedPokemon.sprites.front_default}
            alt={clickedPokemon.name}
          />
          <p>
            #{clickedPokemon.id} {clickedPokemon.name}
          </p>
          <div>
            Tipo:
            <ul>
              {clickedPokemon.types.map((type) => (
                <li key={type.type.name}>{type.type.name}</li>
              ))}
            </ul>
          </div>
          <div>
            Habilidades:
            <ul>
              {clickedPokemon.abilities.map((ability) => (
                <li key={ability.slot}>{ability.ability.name}</li>
              ))}
            </ul>
          </div>
        </S.ModalBody>
      </S.ModalContent>
    </S.ModalRoot>
  );
}
