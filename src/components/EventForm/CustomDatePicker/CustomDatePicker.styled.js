import { styled } from 'styled-components';

export const DayPickerWrapper = styled.div`
  position: relative;
  width: 240px;

  ${({ theme }) => theme.breakpoints.tablet} {
    width: 308px;
  }
  ${({ theme }) => theme.breakpoints.desktop} {
    width: 372px;
  }
`;

export const DayPickerButton = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  padding: 16px 12px;
  margin-top: 8px;
  height: 56px;

  border-radius: 8px;
  border: ${({ 'data-value': value }) =>
    !value ? '1px solid #aca7c3' : '1px solid #7b61ff'};
  background: #fff;

  color: ${({ 'data-open': open }) => (!open ? '#3f3f3f' : '#7b61ff')};
  font-family: Poppins, sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;

  cursor: pointer;

  transition: color 400ms ease-in-out;

  & > svg {
    transform: rotate(${({ 'data-open': open }) => (!open ? 0 : '180deg')});
    transition: transform 400ms ease-in-out;
    pointer-events: none;
  }

  ${({ 'data-selected': selected }) => selected && `border: 1px solid #7b61ff;`}
`;

export const DropDown = styled.div`
  position: absolute;

  left: 0;
  transform: scaleY(${({ 'data-open': open }) => (!open ? 0 : 1)});
  transform-origin: top;
  opacity: ${({ 'data-open': open }) => (!open ? 0 : 1)};
  transition: transform 400ms ease-in-out, opacity 400ms ease-in-out;

  width: 100%;
  padding: 20px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  pointer-events: ${({ 'data-open': open }) => (!open ? 'none' : 'all')};

  z-index: 22;
`;

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 16px;
  margin-top: 16px;
`;

export const ConfirmButton = styled.button`
  padding: 8px 16px;
  min-width: 108px;

  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.Poppins};
  font-size: ${({ theme }) => theme.fontSize.small.xs};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 1.33;

  border: 1px solid #7b61ff;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.buttonMainColor};

  transition: background-color 400ms ease-in-out, color 400ms ease-in-out;
  &:hover,
  :focus {
    background-color: ${({ theme }) => theme.colors.buttonHoverColor};
  }

  cursor: pointer;
`;
export const CancelButton = styled(ConfirmButton)`
  background-color: ${({ theme }) => theme.backgroundColors.white};
  color: ${({ theme }) => theme.colors.purple};

  &:hover,
  :focus {
    color: ${({ theme }) => theme.colors.white};
  }
`;
