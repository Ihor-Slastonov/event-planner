import { styled, css } from 'styled-components';

const getPriorityStyles = priority => {
  if (priority === 'Low') {
    return css`
      color: ${({ theme }) => theme.colors.priority.low};
    `;
  } else if (priority === 'Medium') {
    return css`
      color: ${({ theme }) => theme.colors.priority.medium};
    `;
  } else if (priority === 'High') {
    return css`
      color: ${({ theme }) => theme.colors.priority.high};
    `;
  }
};

export const EventTitle = styled.h2`
  margin-top: 24px;
  margin-bottom: 24px;

  color: ${({ theme }) => theme.colors.mainText};
  font-family: ${({ theme }) => theme.fonts.Poppins};
  font-size: ${({ theme }) => theme.fontSize.medium.xs};
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  line-height: 1;
`;

export const EventWrapper = styled.div`
  padding-bottom: 40px;
  background-color: ${({ theme }) => theme.backgroundColors.white};
`;

export const ImageWrapper = styled.div`
  margin-bottom: 24px;

  width: 272px;
  height: 168px;
  overflow: hidden;
  border-radius: 8px;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const EventAbout = styled.p`
  margin-bottom: 24px;
  padding: 0 16px;

  color: ${({ theme }) => theme.colors.secodText};
  font-family: ${({ theme }) => theme.fonts.Poppins};
  font-size: ${({ theme }) => theme.fontSize.small.s};
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  line-height: 1.42;
`;
export const EventInfoChipsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  padding: 0 16px;
  margin-bottom: 40px;
`;

export const EventInfoChip = styled.span`
  padding: 6px 12px;

  text-align: center;
  font-family: ${({ theme }) => theme.fonts.Poppins};
  font-size: ${({ theme }) => theme.fontSize.small.s};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  line-height: 1.42;

  color: ${({ theme }) => theme.colors.purple};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.backgroundColors.white};
  box-shadow: 4px 5px 9px 0px rgba(166, 141, 174, 0.28);
`;

export const EventInfoChipPriority = styled(EventInfoChip)`
  ${({ 'data-priority': priority }) => getPriorityStyles(priority)}
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;
  gap: 22px;
`;

export const DeleteButton = styled.button`
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
export const EditButton = styled(DeleteButton)`
  background-color: ${({ theme }) => theme.backgroundColors.white};
  color: ${({ theme }) => theme.colors.purple};

  &:hover,
  :focus {
    color: ${({ theme }) => theme.colors.white};
  }
`;
