import EventCard from '../EventCard/EventCard';
import { StyledList } from './EventList.styled';

const EventList = ({ events }) => {
  return (
    <>
      <StyledList>
        {events.map(event => (
          <li key={event.id}>
            <EventCard event={event} />
          </li>
        ))}
      </StyledList>
    </>
  );
};

export default EventList;
