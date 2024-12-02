import { MdSearch } from 'react-icons/md';
import { useService } from '../../provider/ServiceProvider';
import * as S from './styles';

export default function Search() {
  const { term, onChangeTerm, onFilterPokemon } = useService();

  return (
    <S.SearchContainer>
      <S.InputSearch
        type="search"
        placeholder="Busque seu pokémon..."
        value={term}
        onChange={onChangeTerm}
      />
      <button onClick={onFilterPokemon}>
        <MdSearch size={24} />
      </button>
    </S.SearchContainer>
  );
}
