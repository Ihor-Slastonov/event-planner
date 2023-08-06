import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const StyledButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  gap: 16px;

  border: transparent;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.purple};
  cursor: pointer;

  transition: background-color 400ms ease-in-out;

  &:hover,
  :focus {
    background-color: ${({ theme }) => theme.colors.hover};
  }
`;

export const StyledTextButton = styled.span`
  display: none;

  color: #fff;
  font-family: Poppins;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  /* tablet */
  ${({ theme }) => theme.breakpoints.tablet} {
    display: inline-block;
  }
`;
