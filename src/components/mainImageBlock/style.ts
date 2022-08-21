import { Box, BoxProps } from '@mui/material'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { TypographyProps } from '@mui/system'

export const UnderBgBox = styled(Box)<BoxProps>(() => ({
  zIndex: 1,
  position: 'absolute',
  height: '100%',
  width: '100%',
  background: 'rgba(0, 0, 0, 0.35)',
}))

export const TitleH1Typography = styled(Typography)<TypographyProps>(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    paddingTop: '125px',
    paddingBottom: '25px',
  },
  paddingTop: '68px',
  paddingBottom: '16px',
  maxWidth: 875,
}))

export const SubTitleH2Typography = styled(Typography)<TypographyProps>(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    paddingBottom: '128px',
  },
  paddingBottom: '46px',
  maxWidth: 472,
}))

export const ImageBox = styled(Box)<BoxProps>(() => ({
  height: '100%',
  width: '100vw',
  overflow: 'hidden',
  zIndex: -1,
}))

export const sxResponsiveContainerWeight = {
  height: { xs: 709, sm: 709, md: 550, lg: 550, xl: 550 },
}
export const sxIconButton = {
  width: 70,
  height: 70,
  borderRadius: '50%',
  border: '1px solid #A5A5A5',
  marginRight: '24px',
}
