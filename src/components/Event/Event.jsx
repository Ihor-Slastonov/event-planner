import { useNavigate } from 'react-router-dom';
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
} from './Event.styled';

const Event = ({ event }) => {
  const { id, title, about, imageUrl, category, priority, date, time, city } =
    event;

  const navigate = useNavigate();

  const onDeleteButtonClick = async id => {
    console.log(id);
    navigate('/');
  };
  return (
    <>
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

        <EventAbout>{about}</EventAbout>

        <EventInfoChipsWrapper>
          <EventInfoChip>{category}</EventInfoChip>
          <EventInfoChipPriority data-priority={priority}>
            {priority}
          </EventInfoChipPriority>
          <EventInfoChip>{city}</EventInfoChip>
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
    </>
  );
};

export default Event;
