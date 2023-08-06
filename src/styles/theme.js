const theme = {
  fonts: {
    Alata: 'Alata, sans-serif',
    Inter: 'Inter, sans-serif',
    Poppins: 'Poppins, sans-serif',
  },
  fontWeight: {
    light: 300,
    normal: 400,
    medium: 500,
    semiBold: 600,
  },
  fontSize: {
    small: {
      xxs: '10px',
      xs: '12px',
      s: '14px',
      m: '16px',
      l: '18px',
      xl: '20px',
    },
    medium: {
      xs: '24px',
      s: '28px',
      m: '32px',
      l: '36px',
      xl: '40px',
    },
    large: {
      xs: '50px',
      s: '56px',
      m: '60px',
      l: '64px',
      xl: '96px',
    },
  },
  breakpoints: {
    mobile: '@media (min-width: 320px)',
    tablet: '@media (min-width: 768px)',
    desktop: '@media (min-width: 1280px)',
  },
  backgroundColors: {
    header: '#fefcff',
    white: '#ffffff',
  },
  colors: {
    priority: {
      low: '#6BD475',
      medium: '#E2A300',
      high: '#FF2B77',
    },

    white: '#FFFFFF',
    purple: '#7B61FF',
    red: '#FF2B77',
    yellow: '#E2A300',
    green: '#6BD475',
    darkGray: '#3F3F3F',
    lightGray: '#ACA7C3',

    mainText: '#3F3F3F',
    secodText: '#49454f',
    placeholder: '#888888',
    hover: '#6243FF',

    buttonMainColor: '#7B61FF',
    buttonHoverColor: '#6243FF',
    buttonDisableColor: '#ACA7C3',

    logo: '#7B61FF',
    line: 'tomato',
  },
};

export default theme;
