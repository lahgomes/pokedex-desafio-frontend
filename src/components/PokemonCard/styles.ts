import styled from 'styled-components';

interface CardProps {
  bgcolor: string;
}

export const Card = styled.div<CardProps>`
  grid-column: span 2;
  border-radius: 12px;
  padding: 16px;
  text-align: center;
  background-color: ${({ bgcolor }) => bgcolor};
  position: relative;
  height: 160px;
`;

export const PokemonName = styled.h2`
  cursor: pointer;
  color: #ffff;
  font-size: 24px;
`;

export const Image = styled.img`
  width: 130px;
  height: 130px;
  position: absolute;
  top: -30px;
  right: 10px;
`;
