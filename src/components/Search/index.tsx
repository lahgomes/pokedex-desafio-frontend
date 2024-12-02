import { MdSearch } from 'react-icons/md';
import { useService } from '../../provider/ServiceProvider';
import * as S from './styles';

export default function Search() {
  const { term, onChangeTerm, onSearchFilterPokemon } = useService();

  return (
    <S.SearchContainer>
      <S.InputSearch
        type="search"
        placeholder="Busque o nome do pokémon..."
        value={term}
        onChange={onChangeTerm}
      />
      <button onClick={onSearchFilterPokemon}>
        <MdSearch size={24} />
      </button>
    </S.SearchContainer>
  );
}
