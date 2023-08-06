import PulseLoader from 'react-spinners/PulseLoader';
import { LoaderWrapper } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderWrapper>
      <PulseLoader
        color="#7B61FF"
        loading={true}
        size={30}
        aria-label="Loading Spinner"
      />
    </LoaderWrapper>
  );
};

export default Loader;
