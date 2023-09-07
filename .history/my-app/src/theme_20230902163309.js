// theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    blues: {
      100: '#567D91',
      200: '#A9C7D9',
      300: '#E6ECF1',
      // Add more shades as needed
    },
    secondary: {
      100: '#FED7D7',
      200: '#FEB2B2',
      // Add more shades as needed
    },
    // Define more color modes and palettes
  },
  fonts: {
    body: 'Roboto, sans-serif',
    heading: 'Montserrat, sans-serif',
    // Define custom fonts as needed
  },
  // Customize other theme properties like spacing, breakpoints, etc.
});

export default theme;