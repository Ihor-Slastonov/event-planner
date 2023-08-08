import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import eventsApi from '../../services/eventsApi';
import { toast } from 'react-hot-toast';
import Loader from '../Loader/Loader';

import {
  EventTitle,
  EventWrapper,
  ImageWrapper,
  EventAbout,
  EventInfoChipsWrapper,
  EventInfoChip,
  EventInfoChipPriority,
  ButtonsWrapper,
  DeleteButton,
  EditButton,
  EventContainer,
} from './Event.styled';

const Event = ({ event }) => {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const onDeleteButtonClick = async id => {
    try {
      setIsLoading(true);
      await eventsApi.deleteEventById(id);
      toast.success('Event has been successfully deleted');
    } catch (error) {
      console.log(error.response.status);
    } finally {
      setIsLoading(false);
      navigate('/');
    }
  };

  const { id, title, description, imageUrl, category, priority, date, time, location } =
    event;
  return (
    <>
      {isLoading && <Loader />}
      <EventContainer>
        <EventTitle>{title}</EventTitle>
        <EventWrapper>
          {imageUrl && (
            <ImageWrapper>
              <img
                src={require(`../../images/events/${event.imageUrl}`)}
                alt={title}
                loading="lazy"
                width="320px"
              />
            </ImageWrapper>
          )}

          <EventAbout>{description}</EventAbout>

          <EventInfoChipsWrapper>
            <EventInfoChip>{category}</EventInfoChip>
            <EventInfoChipPriority data-priority={priority}>
              {priority}
            </EventInfoChipPriority>
            <EventInfoChip>{location}</EventInfoChip>
            <EventInfoChip>
              {date} at {time}
            </EventInfoChip>
          </EventInfoChipsWrapper>

          <ButtonsWrapper>
            <EditButton>Edit</EditButton>
            <DeleteButton onClick={() => onDeleteButtonClick(id)}>
              Delete event
            </DeleteButton>
          </ButtonsWrapper>
        </EventWrapper>
      </EventContainer>
    </>
  );
};

export default Event;
