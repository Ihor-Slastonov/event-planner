import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { toast } from 'react-hot-toast';
import eventsApi from '../../services/eventsApi';

import GoBackButton from '../../components/GoBackButton/GoBackButton';
import Container from '../../components/Container/Container';
import Event from '../../components/Event/Event';
import Loader from '../../components/Loader/Loader';

import { StyledSection } from './EventPage.styled';

const EventPage = () => {
  const [event, setEvent] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const params = useParams();
  const { eventId } = params;

  useEffect(() => {
    const getEventById = async id => {
      try {
        setIsLoading(true);
        const event = await eventsApi.fetchEventById(id);
        if (event.length === 0) {
          toast.error('Event not found');
          return navigate('/');
        }

        setEvent(event[0]);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getEventById(eventId);
  }, [eventId]);

  return (
    <StyledSection>
      <Container>
        <GoBackButton />
        {!isLoading && <Event event={event} />}
        {isLoading && <Loader />}
      </Container>
    </StyledSection>
  );
};

export default EventPage;
