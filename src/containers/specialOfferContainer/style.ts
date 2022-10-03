import { Grid, GridProps, BoxProps, Box, IconButton, IconButtonProps } from '@mui/material'
import { styled } from '@mui/material/styles'
import { PS_BACKGROUND_SECONDARY_GREY_80 } from '../../theme'

export const sxIconOfferButton = {
  width: 141,
  height: 141,
  borderRadius: '50%',
  border: '1px solid #D79500',
}

interface CustomBoxProps extends BoxProps {
  imageBg: string
}

export const ContainerGrid = styled(Grid)<GridProps>(({ theme }) => ({
  height: '461px',
  position: 'relative',
  [theme.breakpoints.down('md')]: {
    height: '800px',
  },
}))

export const TextContainer = styled(Box)<BoxProps>(({ theme }) => ({
  paddingBottom: '52px',
  [theme.breakpoints.down('md')]: {
    paddingBottom: '335px',
  },
}))

export const BoxWidthPercent = styled(Box)<BoxProps>((props) => ({
  display: 'flex',
  width: '43%',
  [props.theme.breakpoints.down('lg')]: {
    width: '100%',
    position: 'relative',
  },
}))
export const UnderBgBoxOffer = styled(Box)<BoxProps>(({ theme }) => ({
  // display: 'none',
  [theme.breakpoints.down('lg')]: {
    zIndex: 1,
    position: 'absolute',
    height: '100%',
    width: '100%',
    background: PS_BACKGROUND_SECONDARY_GREY_80,
  },
}))

export const MainImgBgOffer = styled(Grid, {
  shouldForwardProp: (props) => props !== 'imageBg',
})<CustomBoxProps>((props) => ({
  [props.theme.breakpoints.down('lg')]: {
    width: '100%',
    backgroundImage: `url(${props.imageBg})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    minHeight: '100%',
    maxHeight: '100%',
    position: 'absolute',
    zIndex: -1,
  },
}))

export const ContentContainerOffer = styled(Grid)<GridProps>(({ theme }) => ({
  width: 800,
  padding: '80px 80px 48px 62px',
  paddingRight: '62px',
  flexDirection: 'column',
  justifyContent: 'end',
  [theme.breakpoints.only('lg')]: {
    width: 640,
  },
  [theme.breakpoints.down('lg')]: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  position: 'absolute',
  zIndex: 5,
}))

export const PrevButton = styled(IconButton)<IconButtonProps>(({ theme }) => ({
  position: 'absolute',
  zIndex: 5,
  bottom: '19px',
  right: '53%',
  [theme.breakpoints.only('lg')]: {
    right: '54%',
  },
  [theme.breakpoints.only('md')]: {
    right: '56%',
  },
  [theme.breakpoints.only('sm')]: {
    right: '58%',
  },
  [theme.breakpoints.down('sm')]: {
    right: '61%',
  },
}))
export const NextButton = styled(IconButton)<IconButtonProps>(({ theme }) => ({
  position: 'absolute',
  zIndex: 5,
  bottom: '19px',
  right: '45%',
  [theme.breakpoints.only('lg')]: {
    right: '43%',
  },
  [theme.breakpoints.only('md')]: {
    right: '39%',
  },
  [theme.breakpoints.only('sm')]: {
    right: '36%',
  },
  [theme.breakpoints.down('sm')]: {
    right: '28%',
  },
}))

export const CustomImage = styled(Grid)<GridProps>(({ theme }) => ({
  [theme.breakpoints.down('lg')]: {
    display: 'none',
  },
  position: 'relative',
  width: '43%',
}))
export const EmblemsImage = styled(Grid)<GridProps>(() => ({
  width: '220px',
  height: '108px',
}))
