import styled from 'styled-components';
import FavoriteList from '../../components/FavoriteList';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

function Favoritos() {
  return (
    <Wrapper>
      <FavoriteList />
    </Wrapper>
  );
}

export default Favoritos;
