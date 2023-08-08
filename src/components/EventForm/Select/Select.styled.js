import { styled } from 'styled-components';

export const SelectWrapper = styled.div`
  position: relative;
  width: 240px;

  ${({ theme }) => theme.breakpoints.tablet} {
    width: 308px;
  }
  ${({ theme }) => theme.breakpoints.desktop} {
    width: 372px;
  }
`;

export const SelectButton = styled.button`
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
`;

export const OptionList = styled.ul`
  position: absolute;

  left: 0;
  transform: scaleY(${({ 'data-open': open }) => (!open ? 0 : 1)});
  transform-origin: top;
  opacity: ${({ 'data-open': open }) => (!open ? 0 : 1)};
  transition: transform 400ms ease-in-out, opacity 400ms ease-in-out;

  width: 100%;
  padding: 16px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  pointer-events: ${({ 'data-open': open }) => (!open ? 'none' : 'all')};

  z-index: 22;
`;

export const Option = styled.li`
  padding: 16px 0;

  font-family: Poppins, sans-serif;
  font-size: 16px;
  font-weight: 400;

  border-bottom: 1px solid #aca7c3;
  color: #3f3f3f;

  &:first-of-type {
    padding-top: 0;
  }
  &:last-of-type {
    padding-bottom: 0;
    border-bottom: none;
  }

  cursor: pointer;

  transition: color 400ms ease-in-out;

  &:hover,
  :focus {
    font-family: Poppins, sans-serif;
    font-size: 16px;
    font-weight: 400;

    color: #7b61ff;
  }
`;
