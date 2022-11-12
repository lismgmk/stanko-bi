import { Card, CardProps, Box, BoxProps } from '@mui/material'
import { styled } from '@mui/material/styles'

export const CustomCard = styled(Card)<CardProps>(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    height: 417,
  },
  height: 355,
  width: 285,
  background: theme.palette.primary.main,
  boxShadow: '3px 4px 3px rgba(0, 0, 0, 0.15)',
  borderRadius: 10,
}))

export const CustomCardMedia = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    height: 175,
  },
  height: 141,
  position: 'relative',
  width: '100%',
}))
