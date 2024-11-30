import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  padding: 16px;
  width: 100%;
`;

const Nav = styled.nav`
  display: flex;
  gap: 16px;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/favoritos">Meus Favoritos</Link>
      </Nav>
    </HeaderContainer>
  );
}
