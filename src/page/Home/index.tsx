import styled from 'styled-components';
import Filter from '../../components/Filter';
import PokemonList from '../../components/PokemonList';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 1024px;
  margin: 0 auto;
  padding: 16px 0;
`;

const Heading = styled.h1`
  color: #919191;
`;

export default function Home() {
  return (
    <Container>
      <Heading> Encontre seu Pokémon</Heading>
      <Filter />
      <PokemonList />
    </Container>
  );
}
