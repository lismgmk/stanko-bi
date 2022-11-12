import { Card, CardProps, Box, BoxProps } from '@mui/material'
import { styled } from '@mui/material/styles'

export const AdvantagesCard = styled(Card)<CardProps>(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    height: 230,
  },
  height: 146,
  // width: 285,
  background: theme.palette.primary.main,
  boxShadow: '3px 4px 13px rgba(0, 0, 0, 0.15)',
  borderRadius: 20,
}))

export const CustomCardMedia = styled(Box)<BoxProps>(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    height: 175,
  },
  height: 141,
  position: 'relative',
  width: '100%',
}))
