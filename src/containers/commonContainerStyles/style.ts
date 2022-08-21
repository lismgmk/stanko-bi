import { Box, BoxProps, Container, ContainerProps } from '@mui/material'
import { styled } from '@mui/material/styles'

interface CustomBoxProps extends BoxProps {
  bgColor?: string
}

export const CustomWrapperBox = styled(Box, {
  shouldForwardProp: (props) => props !== 'bgColor',
})<CustomBoxProps>((props) => ({
  position: 'relative',
  background: props.bgColor,
  width: '100%',
  height: '100%',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center center',
}))

export const CustomContainer = styled(Container)<ContainerProps>(() => ({
  pl: { xs: 1.2, sm: 1.2, mobile: 1.2, md: 1.2, lg: 1.2, xl: 1.2 },
  pr: { xs: 1.2, sm: 1.2, mobile: 1.2, md: 1.2, lg: 1.2, xl: 1.2 },
  position: 'relative',
  overflow: 'hidden',
}))
