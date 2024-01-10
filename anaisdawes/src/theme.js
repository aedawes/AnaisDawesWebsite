// theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    // styles: {
    //     global: {
    //       // Import and define the Google Fonts using @font-face
    //       '@font-face': [
    //         {
    //           fontFamily: 'Poppins', // Font family name for Poppins
    //           src: 'url(https://fonts.gstatic.com/s/poppins/v15/pxiEyp8kv8JHgFVrJJfedw.ttf) format("truetype")',
    //           fontWeight: 'normal', // FontWeight for Poppins
    //           fontStyle: 'normal',
    //         },
    //         {
    //           fontFamily: 'Questrial', // Font family name for Questrial
    //           src: 'url(https://fonts.googleapis.com/css2?family=Questrial&display=swap)',
    //           fontWeight: 'normal',
    //           fontStyle: 'normal',
    //         },
    //       ],
    //     },
    // },
    fonts: {
      poppins: 'Poppins, sans-serif'
    },
    colors: {
        blues: {
            100: '#0B0C21',
            200: '#567D91',
            205: '#618294',
            300: '#A9C7D9',
            400: '#E6ECF1',
        },
        oranges: {
            100: '#ED8957',
        },
    },
    // fonts: {
    //     body: 'Roboto, sans-serif',
    //     heading: 'Montserrat, sans-serif',
    // },
});

export default theme;