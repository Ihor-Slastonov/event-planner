import { styled } from 'styled-components';

export const SearchForm = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  margin-top: 24px;
  width: 272px;
  height: 48px;
  background-color: ${({ theme }) => theme.backgroundColors.white};
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  border-radius: 8px;

  ${({ theme }) => theme.breakpoints.tablet} {
    margin-top: 0;
    margin-right: 24px;
    width: 368px;
  }
  ${({ theme }) => theme.breakpoints.desktop} {
    width: 410px;
  }
`;

export const SearchButton = styled.button`
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);

  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0;

  color: ${({ theme }) => theme.colors.purple};
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: color 400ms ease;

  &:hover {
    color: ${({ theme }) => theme.colors.hover};
  }
`;
export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  padding: 12px 48px;

  border: transparent;
  outline: transparent;
  border-radius: 8px;

  color: ${({ theme }) => theme.colors.purple};
  font-family: ${({ theme }) => theme.fonts.Poppins};
  font-size: ${({ theme }) => theme.fontSize.small.s};
  line-height: 1;

  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
    font-weight: ${({ theme }) => theme.fontWeight.light};
  }
`;

export const SearchClearButton = styled(SearchButton)`
  left: calc(100% - 36px);
  opacity: ${({ 'data-words': word }) => (!word ? 0 : 1)};
  transition: opacity 400ms ease-in-out;
  pointer-events: ${({ 'data-words': word }) => (!word ? 'none' : 'all')};
`;
