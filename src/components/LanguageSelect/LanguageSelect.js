import { useState } from 'react';
import {
  LanguageSelectWrapper,
  LanguageButton,
  LanguageOverlay,
  Language,
} from './LanguageSelect.styled';
import { FiChevronDown } from 'react-icons/fi';

const LanguageSelect = () => {
  const [currentLanguage, setCurrentLanguage] = useState('UK');
  const [isOpen, setIsOpen] = useState(false);

  const onLanguageButtonClick = () => setIsOpen(prev => !prev);

  const onLanguageSelect = e => {
    setCurrentLanguage(e.target.textContent);
    setIsOpen(false);
  };

  return (
    <>
      <LanguageSelectWrapper>
        <LanguageButton type="button" onClick={onLanguageButtonClick}>
          {currentLanguage}
          <FiChevronDown size={24} />
        </LanguageButton>

        <LanguageOverlay open={isOpen} onClick={() => setIsOpen(false)}>
          <Language onClick={onLanguageSelect}>EN</Language>
          <Language onClick={onLanguageSelect}>UK</Language>
        </LanguageOverlay>
      </LanguageSelectWrapper>
    </>
  );
};

export default LanguageSelect;
