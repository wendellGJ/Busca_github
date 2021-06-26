import { ptBR } from '@material-ui/core/locale';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

export const primaryColor = '#FAE22C';
export const secondaryColor = '#00375F';
export const black = '#000000';
export const white = '#FFFFFF';
export const Gray = '#4E4E4E';
export const Red = '#E11919';
export const gren = '#43A047';
export const dividerBlue = '#66869B';

const AppTheme = createMuiTheme(
  {
    palette: {
      primary: {
        main: primaryColor,
      },
      secondary: {
        main: secondaryColor,
      },
    },
    appColors: {
      primaryColor,
      secondaryColor,
      black,
      white,
      Gray,
      Red,
      gren,
      dividerBlue,
    },
    typography: {
      fontFamily: "'Poppins', sans-serif",
      body1: {
        fontFamily: "'Poppins', sans-serif",
      },
    },
  },
  ptBR,
);

export default AppTheme;
