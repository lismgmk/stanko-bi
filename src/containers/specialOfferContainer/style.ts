import { Grid, GridProps } from '@mui/material'
import { styled } from '@mui/material/styles'

export const sxIconOfferButton = {
  width: 141,
  height: 141,
  borderRadius: '50%',
  border: '1px solid #D79500',
}

export const sxResponsiveOfferContainerWeight = { height: 461 }

export const ContainerGrid = styled(Grid)<GridProps>(() => ({
  height: 461,
  position: 'relative',
}))

export const CustomImage = styled(Grid)<GridProps>(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    position: 'absolute',
    zIndex: -1,
    width: '100%',
    // height: 461,
    display: 'block',
  },
  position: 'relative',
  width: '50%',
  // height: '100%',
}))
