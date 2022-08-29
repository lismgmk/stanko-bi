import { createStyles, makeStyles } from '@material-ui/core'
import { PS_TEXT_PRIMARY_BLACK_60 } from './theme'

const useStyles = makeStyles(() =>
  createStyles({
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

      '.swiper-button-prev, .swiper-button-next': {
        color: PS_TEXT_PRIMARY_BLACK_60,
      },

      '.swiper-slide': {
        display: 'flex',
        justifyContent: 'center',
        // width: 285,
      },
      '.swiper-button-prev: after': {
        position: 'relative',
      },
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
  })
)

const GlobalStylesProject = () => {
  useStyles()
  return null
}

export default GlobalStylesProject
