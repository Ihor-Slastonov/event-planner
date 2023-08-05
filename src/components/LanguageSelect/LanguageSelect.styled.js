import { styled } from 'styled-components';

export const LanguageSelectWrapper = styled.div`
  position: relative;
`;

export const LanguageButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 68px;
  padding: 12px 4px 12px 12px;

  border: transparent;
  border-radius: 8px;
  background: #fff;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  color: ${({ theme }) => theme.colors.mainText};
  font-family: ${({ theme }) => theme.fonts.Poppins};
  font-size: ${({ theme }) => theme.fontSize.small.m};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 1;

  cursor: pointer;
`;

export const LanguageOverlay = styled.div`
  position: absolute;
  top: calc(100% + 5px);
  left: 0;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  width: 68px;
  padding: 16px 12px;

  border-radius: 8px;
  background: #fff;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  z-index: 4;

  opacity: ${({ open }) => (!open ? 0 : 1)};
  pointer-events: ${({ open }) => (!open ? 'none' : 'all')};

  transform: scaleY(${({ open }) => (!open ? 0 : 1)});
  transform-origin: top;
  transition: opacity 400ms ease-in-out, transform 400ms ease-in-out;
`;

export const Language = styled.span`
  display: block;
  width: 45px;
  padding-bottom: 4px;

  font-family: ${({ theme }) => theme.fonts.Poppins};
  font-size: ${({ theme }) => theme.fontSize.small.m};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 1.25;
  color: ${({ theme }) => theme.colors.lightGray};

  border-bottom: 1px solid #aca7c3;

  cursor: pointer;

  transition: color 400ms ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.mainText};
  }
`;
