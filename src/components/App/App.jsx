import { Toaster } from 'react-hot-toast';
import Container from '../Container/Container';
import Header from '../Header/Header';

function App() {
  return (
    <>
      <Header />
      <Container></Container>
      <Toaster toastOptions={{ duration: 3000 }} />
    </>
  );
}

export default App;
