import { Button, ButtonProps, Grid, GridProps } from '@mui/material'
import { styled } from '@mui/material/styles'

export const GridItem = styled(Grid)<GridProps>(({ theme }) => ({
  borderRight: `1px solid ${theme.palette.background.paper}`,
  textAlign: 'center',
  '&: last-child': {
    borderRight: 0,
  },
}))
export const SecondaryLineButton = styled(Button)<ButtonProps>(({ theme }) => ({
  fontWeight: 700,
  fontSize: 14,
  lineHeight: '16.9px',
  color: theme.palette.primary.main,
  textTransform: 'capitalize',
  height: '90%',
  margin: 0,
  '&: hover': {
    color: theme.palette.primary.light,
    backgroundColor: 'transparent',
  },
}))

export const sxResponsiveContainerWeight = {
  height: 45,
}
