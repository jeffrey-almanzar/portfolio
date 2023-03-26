import { extendTheme } from '@chakra-ui/react';
import { Poppins } from '@next/font/google';

const poppins = Poppins({
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    variable: '--poppins-font'
});

const theme = extendTheme({
    fonts: {
        body: poppins.style.fontFamily,
        heading: poppins.style.fontFamily,
    },
});

export default theme;