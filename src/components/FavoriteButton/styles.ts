import styled from 'styled-components';

interface FavoriteButtonProps {
  isfavorite?: boolean;
}

export const FavoriteButton = styled.button<FavoriteButtonProps>`
  border: none;
  background-color: transparent;
  cursor: pointer;

  & > svg {
    font-size: 24px;
    color: ${({ isfavorite }) => (isfavorite ? '#ff0000' : '#ffff')};

    &:hover {
      color: '#ff0000';
    }
  }
`;
