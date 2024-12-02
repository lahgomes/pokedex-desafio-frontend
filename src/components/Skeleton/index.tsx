import styled from 'styled-components';

const Wrapper = styled.div`
  flex: 1 1 calc(100% - 32px);
  border-radius: 12px;
  width: 220px;
  height: 160px;
  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  background-size: 80rem 14rem;
  animation: placeholderShimmer 1s linear infinite forwards;

  @media (min-width: 768px) {
    max-width: 320px;
    flex: 1 1 calc(33.33% - 32px);
  }

  @keyframes placeholderShimmer {
    0% {
      background-position: -40rem 0;
    }
    100% {
      background-position: 40rem 0;
    }
  }
`;

export default function Skeleton() {
  return Array(24)
    .fill(0)
    .map((_, index) => <Wrapper key={index} />);
}
