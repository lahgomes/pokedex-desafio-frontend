import styled from 'styled-components';

export const SearchContainer = styled.div`
  position: relative;

  button {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translatey(-50%);
    margin-top: 2px;
  }
`;
export const InputSearch = styled.input`
  padding: 8px 40px 8px 16px;
  outline: none;
  border-color: #919191;
  border-width: 1px;
  border-radius: 100px;

  @media (min-width: 768px) {
    width: 560px;
  }
`;
