import { styled } from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  padding: 10px 24px;
  justify-content: center;
  align-items: center;
  margin-left: ${({ $ml }) => (!$ml ? 0 : $ml)};

  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.Poppins};
  font-size: ${({ theme }) => theme.fontSize.small.s};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 1.42;

  border: transparent;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.buttonMainColor};

  cursor: pointer;

  transition: background-color 400ms ease-in-out;

  &:hover,
  :focus {
    background-color: ${({ theme }) => theme.colors.buttonHoverColor};
  }

  ${({ disabled, theme }) =>
    disabled &&
    `
   background-color: ${theme.colors.buttonDisableColor};
   cursor: not-allowed;
   pointer-events: none;
  `}
`;
