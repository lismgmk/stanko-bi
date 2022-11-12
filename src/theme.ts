import { createTheme } from '@mui/material'
import { TypographyOptions } from '@mui/material/styles/createTypography'
import React from 'react'

export const PS_TEXT_PRIMARY_BLACK = '#000000'
export const PS_TEXT_PRIMARY_BLACK_20 = '#00000033'
export const PS_TEXT_PRIMARY_BLACK_80 = '#000000CC'
export const PS_TEXT_PRIMARY_BLACK_60 = '#00000099'
export const PS_TEXT_SECONDARY_BLACK_60 = '#202020'
export const PS_TEXT_PRIMARY_WHITE = '#FFFFFF'
export const PS_TEXT_PRIMARY_WHITE_80 = '#FFFFFFCC'
export const PS_TEXT_PRIMARY_BLUE = '#212864'
export const PS_TEXT_PRIMARY_BLUE_40 = '#21286466'
export const PS_TEXT_PRIMARY_GREY = '#FFFFFF'
export const PS_TEXT_PRIMARY_GREY_80 = '#FFFFFFCC'
export const PS_TEXT_SECONDARY_GREY = '#808080'
export const PS_TEXT_OPTIONAL_GREY = '#333333'
export const PS_TEXT_PRIMARY_YELLOW = '#FFC239'

export const PS_BACKGROUND_PRIMARY_WHITE = '#FFFFFF'
export const PS_BACKGROUND_PRIMARY_WHITE_70 = '#FFFFFFB2'
export const PS_BACKGROUND_PRIMARY_WHITE_40 = '#FFFFFF66'
export const PS_BACKGROUND_PRIMARY_BLUE = '#15193D'
export const PS_BACKGROUND_SECONDARY_BLUE = '#8C93D1'
export const PS_BACKGROUND_PRIMARY_GREY = '#E5E5E5'
export const PS_BACKGROUND_SECONDARY_GREY = '#F1F1F6'
export const PS_BACKGROUND_SECONDARY_GREY_80 = 'rgba(246, 246, 249, 0.8)'
export const PS_BACKGROUND_OPTIONAL_GREY_80 = '#F6F6F9CC'
export const PS_BACKGROUND_OPTIONAL_GREY_90 = '#F6F6F9E5'
export const PS_BACKGROUND_PRIMARY_BLACK_35 = '#00000059'
export const PS_BACKGROUND_PRIMARY_BLACK = '#22242E'

export const PS_BACKGROUND_BUTTON_PRIMARY_WHITE = '#FFFFFF'
export const PS_BACKGROUND_BUTTON_PRIMARY_BLUE = '#353D83'
export const PS_BACKGROUND_BUTTON_PRIMARY_GREY = '#EEEEEE'
export const PS_BACKGROUND_BUTTON_PRIMARY_GREY_LIGHT = '#A5A5A5'
export const PS_BACKGROUND_BUTTON_PRIMARY_YELLOW = '#FFC239'
export const PS_BACKGROUND_BUTTON_SECONDARY_YELLOW = '##FFB611'

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    contactsHeader: true
    telNumberHeader: true
    buttonHeader: true
    titleButton: true
    cardsTitle: true
    cardsText: true
    cardsPrice: true
    advantagesText: true
  }
}

interface ExtendedTypographyOptions extends TypographyOptions {
  contactsHeader: React.CSSProperties
  telNumberHeader: React.CSSProperties
  buttonHeader: React.CSSProperties
  titleButton: React.CSSProperties
  cardsTitle: React.CSSProperties
  cardsText: React.CSSProperties
  cardsPrice: React.CSSProperties
  advantagesText: React.CSSProperties
}

declare module '@mui/material/styles' {
  interface IPalette {
    primary: {
      main: string
      light: string
      dark: string
      contrastText: string
    }
    secondary: {
      main: string
      light: string
      dark: string
      contrastText: string
    }
    background: {
      paper: string
      default: string
    }
    text: {
      primary: string
      secondary: string
    }
    search: {
      main: string
    }
    field: {
      main: string
    }
    line: {
      main: string
    }
    primarySecond: {
      main: string
      light: string
      dark: string
    }
    optionalSecond: {
      main: string
      light: string
    }
  }

  interface ThemeOptions {
    primary?: {
      main?: string
      light?: string
      dark?: string
      contrastText?: string
    }
    secondary?: {
      main?: string
      light?: string
      dark?: string
      contrastText?: string
    }
    background?: {
      paper?: string
      default?: string
    }
    text?: {
      primary?: string
      secondary?: string
    }
    search?: {
      main?: string
    }
    field?: {
      main?: string
    }
    line?: {
      main?: string
    }
    primarySecond?: {
      main?: string
      light?: string
      dark?: string
    }
    optionalSecond?: {
      main?: string
      light?: string
    }
  }
}
declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true
    mobile: true
    sm: true
    md: true
    lg: true
    xl: true
  }
}
const customBreakpoints = {
  xs: 0,
  mobile: 350,
  sm: 500,
  md: 768,
  lg: 1100,
  xl: 1400,
}

const currentBreakpoints = createTheme({
  breakpoints: {
    values: customBreakpoints,
  },
})
export const themeCustom = createTheme({
  breakpoints: {
    values: customBreakpoints,
  },
  typography: {
    fontFamily: `"Inter", sans-serif`,
    advantagesText: {
      fontSize: 14,
      fontWeight: 400,
      lineHeight: '16px',
      fontFamily: `"Montserrat", sans-serif`,
      color: PS_TEXT_PRIMARY_BLACK_60,
      [currentBreakpoints.breakpoints.down('md')]: {
        fontSize: 12,
        lineHeight: '14px',
      },
    },
    cardsTitle: {
      fontWeight: 700,
      fontSize: 18,
      lineHeight: '19px',
      color: PS_TEXT_PRIMARY_BLACK,
      paddingTop: '2px',
    },
    cardsText: {
      fontWeight: 400,
      fontSize: 12,
      lineHeight: '14.5px',
      color: PS_TEXT_PRIMARY_BLACK_60,
      paddingBottom: 2,
    },
    cardsPrice: {
      fontWeight: 700,
      fontSize: 22,
      lineHeight: '26px',
      color: PS_TEXT_PRIMARY_BLACK,
      paddingTop: '28px',
    },
    contactsHeader: {
      fontWeight: 400,
      fontSize: 14,
      lineHeight: '16.9px',
      color: PS_TEXT_PRIMARY_BLACK_80,
      paddingBottom: '8px',
      textAlign: 'end',
    },
    telNumberHeader: {
      fontWeight: 700,
      fontSize: 16,
      lineHeight: '19.36px',
      color: PS_TEXT_PRIMARY_BLUE,
      paddingBottom: '8px',
    },
    buttonHeader: {
      fontWeight: 700,
      fontSize: 12,
      lineHeight: '14.5px',
      color: PS_TEXT_PRIMARY_BLUE,
      textTransform: 'uppercase',
      padding: 0,
      margin: 0,
    },
    titleButton: {
      [currentBreakpoints.breakpoints.down('md')]: {
        fontSize: 14,
        lineHeight: '16.9px',
        fontWeight: 700,
      },
      fontWeight: 500,
      fontSize: 16,
      lineHeight: '19.4px',
      color: PS_TEXT_PRIMARY_WHITE,
      textTransform: 'uppercase',
    },

    h1: {
      [currentBreakpoints.breakpoints.down('md')]: {
        fontSize: 34,
        lineHeight: '40px',
      },
      fontSize: 48,
      fontWeight: 700,
      color: PS_TEXT_PRIMARY_WHITE,
      lineHeight: '55px',
    },
    h2: {
      [currentBreakpoints.breakpoints.down('md')]: {
        fontSize: 36,
        lineHeight: '36px',
      },
      fontSize: 42,
      fontWeight: 700,
      color: PS_TEXT_PRIMARY_BLACK,
      lineHeight: '50px',
    },
    h3: {
      [currentBreakpoints.breakpoints.down('sm')]: {
        fontSize: 30,
        lineHeight: '30px',
      },
      fontSize: 38,
      fontWeight: 400,
      color: PS_TEXT_PRIMARY_BLACK,
      lineHeight: '42px',
    },
    h4: {
      fontSize: 20,
      fontWeight: 500,
      lineHeight: '21px',
      color: PS_TEXT_PRIMARY_BLACK,
      [currentBreakpoints.breakpoints.down('md')]: {
        fontSize: 18,
        lineHeight: '19px',
      },
    },
    // h5: {
    //   fontSize: 11,
    //   fontWeight: 400,
    //   color: PS_OPTIONAL_BLACK,
    //   textTransform: 'uppercase',
    // },
    // h6: {
    //   fontSize: 18,
    //   fontWeight: 700,
    //   color: PS_OPTIONAL_BLACK,
    // },
    subtitle1: {
      fontSize: 12,
      fontWeight: 400,
      textTransform: 'uppercase',
      lineHeight: '14px',
    },
    subtitle2: {
      fontSize: 18,
      fontWeight: 400,
      // color: PS_OPTIONAL_BLACK,
      textTransform: 'uppercase',
    },
    body1: {
      [currentBreakpoints.breakpoints.only('xs')]: {
        fontSize: 14,
        lineHeight: '18px',
      },
      [currentBreakpoints.breakpoints.between('sm', 'xl')]: {
        fontSize: 16,
        lineHeight: '20px',
      },
      [currentBreakpoints.breakpoints.up('xl')]: {
        fontSize: 20,
        lineHeight: '25px',
      },
      fontWeight: 300,
      // color: PS_MAIN_GREY_LIGHT,
    },
    body2: {
      [currentBreakpoints.breakpoints.down('md')]: {
        fontSize: 14,
        lineHeight: '17px',
      },
      fontSize: 16,
      fontWeight: 500,
      lineHeight: '19.5px',
      color: PS_TEXT_PRIMARY_WHITE_80,
      fontFamily: `"Montserrat", sans-serif`,
    },
    caption: {
      fontSize: 20,
      fontWeight: 800,
      // color: PS_MAIN_RED,
      fontFamily: `"Millimetre", sans-serif`,
      transform: 'matrix(0.98, 0, -0.19, 1, 0, 0)',
      lineHeight: '20px',
    },
    overline: {
      fontSize: 14,
      fontWeight: 500,
      // color: PS_MAIN_WHITE,
      textTransform: 'capitalize',
    },
  } as ExtendedTypographyOptions,
  palette: {
    primary: {
      main: PS_TEXT_PRIMARY_WHITE,
      light: PS_TEXT_PRIMARY_YELLOW,
      dark: PS_TEXT_PRIMARY_BLUE,
      contrastText: PS_TEXT_PRIMARY_BLACK,
    },
    background: {
      paper: PS_BACKGROUND_PRIMARY_WHITE_40,
      default: PS_TEXT_PRIMARY_WHITE,
    },
    // text: {
    //   primary: PS_OPTIONAL_BLACK,
    //   secondary: PS_MAIN_WHITE,
    // },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: () => ({
        '@global': {
          html: {
            '-webkit-font-smoothing': 'antialiasing',
            '-moz-osx-font-smoothing': 'grayscale',
            height: '100%',
            width: '100%',
            margin: 0,
            padding: 0,
          },
          '*, *::before, *::after': {
            boxSizing: 'inherit',
          },
          body: {
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
            fontFamily: 'Inter, serif',
            fontWidth: 400,
            fontSize: 12,
            width: '100%',
            height: '100%',
            overflowX: 'hidden',
            overflowY: 'auto',
            margin: 0,
            padding: 0,
          },

          // '.swiper-button-prev, .swiper-button-next': {
          //   color: PS_TEXT_PRIMARY_BLACK_60,
          // },
          //
          // '.swiper-slide': {
          //   display: 'flex',
          //   justifyContent: 'center',
          //   // width: 285,
          // },
          // '.swiper-button-prev: after': {
          //   position: 'relative',
          // },
          '#root': {
            height: '100%',
            width: '100%',
            margin: 0,
            padding: 0,
          },
          pre: {
            margin: 0,
            padding: 0,
            fontFamily: 'Inter, serif',
            fontWidth: 200,
            fontSize: 11,
          },
        },
      }),
    },
    MuiTypography: {
      defaultProps: {
        variantMapping: {
          contactsHeader: 'span',
          buttonHeader: 'div',
          telNumberHeader: 'div',
          titleButton: 'div',
          cardsTitle: 'div',
          cardsText: 'div',
          cardsPrice: 'div',
          advantagesText: 'div',
        },
      },
    },
  },
})
