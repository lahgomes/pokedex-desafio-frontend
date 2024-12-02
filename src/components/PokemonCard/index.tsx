import { COLORS, getPokemonAvatar } from '../../utils';
import { useModal } from '../../provider/ModalProvider';
import * as S from './styles';

interface PokemonCardProps {
  pokemonType: string;
  pokemon: {
    name: string;
    id: number;
    sprites: {
      front_default: string;
    };
  };
  children?: React.ReactNode;
}

export default function PokemonCard({
  pokemonType,
  pokemon,
  children,
}: PokemonCardProps) {
  const { onOpenModal } = useModal();

  return (
    <S.Card bgcolor={COLORS[pokemonType]} onClick={() => onOpenModal(pokemon)}>
      {children}
      <S.Container>
        <S.PokemonName>{pokemon.name}</S.PokemonName>
        <S.Image src={getPokemonAvatar(pokemon.id)} alt={pokemon.name} />
      </S.Container>
    </S.Card>
  );
}
