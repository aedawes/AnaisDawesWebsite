// theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    styles: {
        global: {
            '.outlinedHeader': {
                WebkitTextStrokeWidth: '0.15rem',
                WebkitTextStrokeColor: '#0B0C21'
            }
        }
    },
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