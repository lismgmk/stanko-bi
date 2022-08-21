import { Button, ButtonProps } from '@mui/material'
import { styled } from '@mui/material/styles'
import { PS_BACKGROUND_BUTTON_PRIMARY_GREY } from '../../theme'

export const CardsButton = styled(Button)<ButtonProps>(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    fontWeight: 600,
    fontSize: 16,
    lineHeight: '19.3px',
  },
  fontWeight: 600,
  fontSize: 20,
  lineHeight: '24px',
  background: PS_BACKGROUND_BUTTON_PRIMARY_GREY,
  boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
  borderRadius: 25,
  color: theme.palette.primary.dark,
  textTransform: 'capitalize',
  padding: '12px 35px',
  '&: hover': {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.primary.dark,
  },
}))
