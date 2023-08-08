import { styled } from 'styled-components';
export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 272px;
  padding: 40px 16px;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.backgroundColors.white};
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  ${({ theme }) => theme.breakpoints.tablet} {
    width: 688px;
    padding: 40px 24px;
  }
  ${({ theme }) => theme.breakpoints.desktop} {
    width: 1280px;
    padding: 40px 40px 54px;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  ${({ theme }) => theme.breakpoints.tablet} {
    flex-wrap: wrap;
    height: 480px;
    gap: 20px 24px;
  }

  ${({ theme }) => theme.breakpoints.desktop} {
    height: 286px;
    gap: 20px 42px;
  }
`;

export const FormButton = styled.button`
  display: flex;
  width: 240px;
  padding: 16px 12px;
  margin-top: 40px;

  justify-content: center;
  align-items: center;

  border: transparent;
  outline: transparent;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.buttonMainColor};
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  color: #fff;
  font-family: Poppins, sans-serif;
  font-size: 16px;
  font-weight: 500;

  transition: background-color 400ms ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.colors.buttonHoverColor};
  }
  /* tablet */
  ${({ theme }) => theme.breakpoints.tablet} {
    margin-left: auto;
    width: 193px;
  }
  /* desktop */
  ${({ theme }) => theme.breakpoints.desktop} {
    margin-top: 60px;
  }
`;
