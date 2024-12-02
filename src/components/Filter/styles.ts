import styled from 'styled-components';

export const FilterContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  padding: 16px 0;
  margin: 0 auto;
`;

export const FilterSelect = styled.select`
  padding: 8px 16px;
  outline: none;
  option {
    text-transform: capitalize;
  }
`;
