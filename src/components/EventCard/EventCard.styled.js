import { styled, css } from 'styled-components';

const getPriorityStyles = priority => {
  if (priority === 'low') {
    return css`
      color: ${({ theme }) => theme.colors.priority.low};
    `;
  } else if (priority === 'medium') {
    return css`
      color: ${({ theme }) => theme.colors.priority.medium};
    `;
  } else if (priority === 'high') {
    return css`
      color: ${({ theme }) => theme.colors.priority.high};
    `;
  }
};

export const CardWrapper = styled.div`
  position: relative;
  width: 272px;
  height: 480px;
  border-radius: 12px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 12px;
  }
  cursor: pointer;

  ${({ theme }) => theme.breakpoints.tablet} {
    width: 332px;
  }
  ${({ theme }) => theme.breakpoints.desktop} {
    width: 302px;
  }
`;

export const ChipsWrapper = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  display: inline-flex;
  align-items: center;
  gap: 12px;
`;

export const CategoryChip = styled.span`
  padding: 6px 12px;

  text-align: center;
  font-family: ${({ theme }) => theme.fonts.Poppins};
  font-size: ${({ theme }) => theme.fontSize.small.s};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 1.42;
  text-transform: capitalize;

  color: ${({ theme }) => theme.colors.purple};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.backgroundColors.white};
`;

export const PriorityChip = styled(CategoryChip)`
  ${({ 'data-priority': priority }) => getPriorityStyles(priority)}
`;

export const BottomCardWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;

  width: 100%;
  background: rgba(255, 255, 255, 0.8);
`;
export const InfoText = styled.p`
  color: ${({ theme }) => theme.colors.purple};
  font-family: ${({ theme }) => theme.fonts.Poppins};
  font-size: ${({ theme }) => theme.fontSize.small.s};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  line-height: 1.71;
`;

export const CardEventTitle = styled.h3`
  padding: 16px 16px 8px 16px;

  color: #1c1b1f;
  font-family: ${({ theme }) => theme.fonts.Poppins};
  font-size: ${({ theme }) => theme.fontSize.small.m};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 1.5;
  background: ${({ theme }) => theme.backgroundColors.white};
`;

export const CardEventAboutWrapper = styled.div`
  width: 100%;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  padding: 8px 16px 16px 16px;
  background: ${({ theme }) => theme.backgroundColors.white};
`;
export const CardEventAbout = styled.p`
  margin-bottom: ${({ 'data-hovered': hovered }) => (!hovered ? 0 : '16px')};
  color: ${({ theme }) => theme.colors.secodText};
  font-family: ${({ theme }) => theme.fonts.Poppins};
  font-size: ${({ theme }) => theme.fontSize.small.s};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  line-height: 1.42;
`;
