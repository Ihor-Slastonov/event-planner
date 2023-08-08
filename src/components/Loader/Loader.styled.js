import { styled } from 'styled-components';

export const LoaderWrapper = styled.div`
  position: absolute;
  top: 200px;
  left: 50%;
  transform: translateX(-50%);

  ${({ theme }) => theme.breakpoints.tablet} {
    top: 100px;
  }
  /* d */
`;
