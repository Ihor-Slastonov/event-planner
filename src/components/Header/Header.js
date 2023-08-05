import Container from '../Container/Container';
import LanguageSelect from '../LanguageSelect/LanguageSelect';
import SearchBar from '../SearchBar/SearchBar';
import {
  StyledHeader,
  HeaderWrapper,
} from './Header.styled';
import HeaderLogo from './HeaderLogo/HeaderLogo';

const Header = () => {
  return (
    <>
      <StyledHeader>
        <Container>
          <HeaderWrapper>
            <HeaderLogo />
            <LanguageSelect />
            <SearchBar />
          </HeaderWrapper>
        </Container>
      </StyledHeader>
    </>
  );
};

export default Header;
