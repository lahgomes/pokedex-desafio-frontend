import { useModal } from '../../provider/ModalProvider';
import * as S from './styles';

const COLORS: Record<string, string> = {
  fire: '#ffa756',
  grass: '#8bbe8a',
  electric: '#f2cb55',
  water: '#58abf6',
  ground: '#f78551',
  rock: '#d4c294',
  fairy: '#eba8c3',
  poison: '#9f6e97',
  bug: '#8bd674',
  dragon: '#e16776',
  psychic: '#a552cc',
  flying: '#748fc9',
  fighting: '#eb4971',
  normal: '#b9b8d3',
  ghost: '#8571be',
  ice: '#61cec0',
};

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
    <S.Card bgcolor={COLORS[pokemonType]}>
      <S.PokemonName onClick={() => onOpenModal(pokemon)}>
        {pokemon.name}
      </S.PokemonName>
      {children}
    </S.Card>
  );
}
