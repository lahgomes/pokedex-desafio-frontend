import { Link } from 'react-router-dom';
import { MdFavorite } from 'react-icons/md';
import * as S from './styles';
import Search from '../Search';

export default function Header() {
  return (
    <S.HeaderContainer>
      <S.Nav>
        <Link to="/">
          <img src="/logo.svg" alt="Home pokedex" width="85" height="65" />
        </Link>
        <Search />
        <Link to="/favoritos">
          Favoritos
          <MdFavorite />
        </Link>
      </S.Nav>
    </S.HeaderContainer>
  );
}
