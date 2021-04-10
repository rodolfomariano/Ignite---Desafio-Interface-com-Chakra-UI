import { extendTheme } from "@chakra-ui/react"

export const theme = extendTheme({
  colors: {
    gray: {
      "50": "#F5F8FA",
      "400": "#999999",
      "600": "#47585B",
    },
    yellow: {
      "500": "#FFBA08"
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.600',
      }
    }
  }
})