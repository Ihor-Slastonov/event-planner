import { styled } from 'styled-components';

export const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 24px;
  /* outline: 1px solid ${({ theme }) => theme.colors.red}; */

  /* mobile */
  ${({ theme }) => theme.breakpoints.mobile} {
    width: 320px;
  }

  /* tablet */
  ${({ theme }) => theme.breakpoints.tablet} {
    width: 768px;
    padding: 0 40px;
  }

  /* desktop */
  ${({ theme }) => theme.breakpoints.desktop} {
    width: 1280px;
    padding: 0;
  }
`;
