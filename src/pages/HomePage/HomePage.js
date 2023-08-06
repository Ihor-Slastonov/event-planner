import { useEffect, useState } from 'react';
import eventsApi from '../../services/eventsApi';
import { toast } from 'react-hot-toast';

import AddEventButton from '../../components/AddEventButton/AddEventButton';
import EventList from '../../components/EventList/EventList';
import Loader from '../../components/Loader/Loader';

import { Section, ActionsWrapper } from './HomePage.styled';
import Container from '../../components/Container/Container';

const HomePage = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getAllEvents = async () => {
      try {
        setIsLoading(true);
        const events = await eventsApi.fetchAllEvents();
        if (events.length === 0) return toast.error('Event not found');

        setEvents(events);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getAllEvents();
  }, []);

  return (
    <Section>
      <Container>
        {!isLoading && (
          <ActionsWrapper>
            <AddEventButton />
          </ActionsWrapper>
        )}
        <EventList events={events} />
        {isLoading && <Loader />}
      </Container>
    </Section>
  );
};

export default HomePage;
