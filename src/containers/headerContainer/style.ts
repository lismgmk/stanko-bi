import { Box, BoxProps } from '@mui/material'
import { styled } from '@mui/material/styles'

interface CustomBoxProps extends BoxProps {
  bgColor?: string
  bgImage?: string
  boxHeight?: number
}

export const CustomWrapperBox = styled(Box, {
  shouldForwardProp: (props) => props !== 'bgImage' && props !== 'bgColor' && props !== 'boxHeight',
})<CustomBoxProps>((props) => ({
  position: 'relative',
  background:
    props.bgColor ||
    `linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), linear-gradient(180deg, rgba(0, 0, 0, 0) 46.88%, rgba(0, 0, 0, 0.4) 100%),  linear-gradient(180deg, rgba(0, 0, 0, 0.4) 6.25%, rgba(0, 0, 0, 0) 21.88%),  url(${props.bgImage})`,
  width: '100%',
  height: '100%',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
  '&: before': {
    content: '""',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 0,
    backgroundColor: !props.bgColor && 'rgba(0, 0, 0, 0.5)',
    backgroundPosition: 'center center',
    position: 'absolute',
  },
}))
export const sxDisplay = {
  display: { xs: 'none', mobile: 'none', sm: 'none', md: 'block', lg: 'block', xl: 'block' },
  height: '100%',
}
