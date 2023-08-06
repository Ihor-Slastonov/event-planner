import { useState } from 'react';

import Button from '../Button/Button';

import {
  CardWrapper,
  CategoryChip,
  ChipsWrapper,
  InfoText,
  InfoWrapper,
  PriorityChip,
  BottomCardWrapper,
  CardEventTitle,
  CardEventAbout,
  CardEventAboutWrapper,
} from './EventCard.styled';

const EventCard = ({ event }) => {
  const { id, title, about, imageUrl, category, priority, date, time, city } =
    event;

  const [isHover, setIsHover] = useState(false);

  const onMouseHover = () => setIsHover(prev => !prev);

  return (
    <CardWrapper
      id={id}
      onMouseEnter={onMouseHover}
      onMouseLeave={onMouseHover}
    >
      <img
        src={require(`../../images/events/${imageUrl}`)}
        width="332"
        alt={title}
      />
      <ChipsWrapper>
        <CategoryChip>{category}</CategoryChip>
        <PriorityChip data-priority={priority}>{priority}</PriorityChip>
      </ChipsWrapper>

      <BottomCardWrapper>
        <InfoWrapper>
          <InfoText>
            {date} at {time}
          </InfoText>
          <InfoText>{city}</InfoText>
        </InfoWrapper>

        <CardEventTitle>{title}</CardEventTitle>

        <CardEventAboutWrapper data-hovered={isHover}>
          <CardEventAbout data-hovered={isHover}>{about}</CardEventAbout>
          {isHover && <Button $ml="auto">More info</Button>}
        </CardEventAboutWrapper>
      </BottomCardWrapper>
    </CardWrapper>
  );
};

export default EventCard;
