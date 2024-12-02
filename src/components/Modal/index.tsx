import { COLORS, getPokemonAvatar } from '../../utils';
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
            src={getPokemonAvatar(clickedPokemon.id)}
            alt={clickedPokemon.name}
          />
          <S.PokemonName>
            <S.PokemonID>#{clickedPokemon.id}</S.PokemonID>
            {clickedPokemon.name}
          </S.PokemonName>
          <S.InfoSection>
            <div>
              <h3>Tipos</h3>
              <ul>
                {clickedPokemon.types.map((type) => {
                  const typeColor = COLORS[type.type.name] || '#ccc';
                  return (
                    <S.Badge key={type.type.name} bgcolor={typeColor}>
                      {type.type.name}
                    </S.Badge>
                  );
                })}
              </ul>
            </div>
            <div>
              <h3>Habilidades</h3>
              <ul>
                {clickedPokemon.abilities.map((ability) => (
                  <S.Badge bgcolor="#ccc" key={ability.slot}>
                    {ability.ability.name}
                  </S.Badge>
                ))}
              </ul>
            </div>
          </S.InfoSection>
        </S.ModalBody>
      </S.ModalContent>
    </S.ModalRoot>
  );
}
