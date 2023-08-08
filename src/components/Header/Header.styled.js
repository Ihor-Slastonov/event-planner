import { styled } from 'styled-components';

export const StyledHeader = styled.header`
  padding: 24px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.purple};
  background: ${({ theme }) => theme.backgroundColors.header};

  /* tablet */
  ${({ theme }) => theme.breakpoints.tablet} {
    padding: 26px 0 18px;
  }
  /* desktop */
  ${({ theme }) => theme.breakpoints.desktop} {
    padding: 22px 0;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  ${({ theme }) => theme.breakpoints.tablet} {
    & > :nth-child(2) {
      order: 3;
    }
  }
`;
