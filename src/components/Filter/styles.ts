import styled from 'styled-components';

export const FilterSelect = styled.select`
  padding: 8px 16px;
  outline: none;
  border-color: #919191;
  border-width: 1px;
  border-radius: 100px;
  color: #919191;
  width: 100%;

  option {
    text-transform: capitalize;
  }

  @media (min-width: 768px) {
    width: 300px;
  }
`;
