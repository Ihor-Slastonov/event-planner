import events from '../../api/events';
import EventList from '../../components/EventList/EventList';
import { Section } from './HomePage.styled';

const HomePage = () => {
  return (
    <Section>
      <EventList events={events} />
    </Section>
  );
};

export default HomePage;
