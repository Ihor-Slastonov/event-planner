import { styled } from 'styled-components';

export const Section = styled.section`
  padding: 40px 0;

  ${({ theme }) => theme.breakpoints.desktop} {
    padding: 60px 0;
  }
`;

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  margin-bottom: 40px;

  /* tablet */
  ${({ theme }) => theme.breakpoints.tablet} {
    margin-bottom: 24px;
  }

  /* desktop */
  ${({ theme }) => theme.breakpoints.desktop} {
    margin-bottom: 40px;
  }
`;
