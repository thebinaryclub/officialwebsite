// theme.js

// 1. import `extendTheme` function
import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

// 2. Add your color mode config
const styles =  {
  global: (props) => ({
    body: {
      // fontFamily: 'body',
      // color: mode('red', 'whiteAlpha.900')(props),
      bg: mode('white', 'black')(props),
      lineHeight: 'base',
    },
    Navbar: {
      
    }
  }),
}
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false,

  semanticTokens: {
    colors: {
      error: 'red.500',
      success: 'green.500',
      primary: {
        default: 'red.500',
        _dark: 'red.400',
      },
      secondary: {
        default: 'red.800',
        _dark: 'red.700',
      },
    },
  },
}

// 3. extend the theme
const theme = extendTheme({ config, styles })

export default theme