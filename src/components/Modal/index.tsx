import { COLORS } from '../../utils';
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
          <S.PokemonImage
            src={clickedPokemon.sprites.front_default}
            alt={clickedPokemon.name}
          />
          <S.PokemonName>
            {clickedPokemon.name}{' '}
            <S.PokemonID>#{clickedPokemon.id}</S.PokemonID>
          </S.PokemonName>
          <S.InfoSection>
            <div>
              <h3>Tipos</h3>
              <ul>
                {clickedPokemon.types.map((type) => {
                  const typeColor = COLORS[type.type.name] || '#ccc';
                  return (
                    <S.TypeBadge key={type.type.name} typeColor={typeColor}>
                      {type.type.name}
                    </S.TypeBadge>
                  );
                })}
              </ul>
            </div>
            <div>
              <h3>Habilidades</h3>
              <ul>
                {clickedPokemon.abilities.map((ability) => (
                  <li key={ability.slot}>{ability.ability.name}</li>
                ))}
              </ul>
            </div>
          </S.InfoSection>
        </S.ModalBody>
      </S.ModalContent>
    </S.ModalRoot>
  );
}
