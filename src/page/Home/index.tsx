import styled from 'styled-components';
import PokemonList from '../../components/PokemonList';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

function Home() {
  return (
    <Wrapper>
      <PokemonList />
    </Wrapper>
  );
}

export default Home;
