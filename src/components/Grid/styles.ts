import styled from 'styled-components';

export const Grid = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 1024px;
  margin: 0 auto;
  gap: 40px 15px;
  padding: 24px 0;
`;
