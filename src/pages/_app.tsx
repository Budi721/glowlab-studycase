import { ChakraProvider } from '@chakra-ui/react'

import { extendTheme } from '@chakra-ui/react'

const colors = {
  brand: {
    100: '#bdd6e6',
    200: '#b1d6e6',
    300: '#7ab6d0',
    400: '#94b5de',
    500: '#f5a449',
    600: '#900a22',
    700: '#1e4d83',
    800: '#546b7d',
    900: '#616264',
  },
}

const theme = extendTheme({ colors })

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
