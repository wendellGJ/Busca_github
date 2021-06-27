import { ptBR } from '@material-ui/core/locale';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';

export const appColors = {
  primaryColor: '#FAE22C',
  secondaryColor: '#00375F',
  black: '#000000',
  white: '#FFFFFF',
  Gray: '#4E4E4E',
  Red: '#E11919',
  gren: '#43A047',
  dividerBlue: '#66869B',
};
const AppTheme = createMuiTheme(
  {
    palette: {
      primary: {
        main: appColors.primaryColor,
      },
      secondary: {
        main: appColors.secondaryColor,
      },
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
